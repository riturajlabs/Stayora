require("dotenv").config();

const express = require("express");
const {MongoStore} = require('connect-mongo');
const session = require("express-session");
const flash = require("connect-flash");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");

const ExpressError = require("./utils/ExpressError");
const User = require("./models/user.js");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

const app = express();


const helmet = require("helmet");
const compression = require("compression");


app.use(helmet());
app.use(compression());

// App config
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

// DB connection
const dbUrl = process.env.ATLASDB_URL;

async function main(){
    await mongoose.connect(dbUrl);
}
main()
  .then((res)=>{
    console.log("connected database");
  })
  .catch(err=>{
    console.log(err.message);
  })

// Session store will be created after DB connection
const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: { 
        secret: process.env.SESSION_SECRET  
    },
    touchAfter: 24*60*60 // 24 hours
});

// Session middleware
app.use(session({
    store,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { 
        maxAge: 7*24*60*60*1000, 
        httpOnly: true }
}));

app.use(flash());

// Passport setup
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Flash & user locals
app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});

// Routes
app.use("/", userRouter);
app.get("/listing/privacy", (req, res) => res.render("listings/privacy"));
app.get("/listing/terms", (req, res) => res.render("listings/terms"));
app.use("/listing", listingRouter);
app.use("/listing/:id/reviews", reviewRouter);
app.get("/", (req, res) => res.redirect("/listing"));

// 404 handler
app.use((req, res, next) => 
    next(new ExpressError(404, "Page Not Found!")));

// Global error handler
app.use((err, req, res, next) => {
    console.error(err);
    let status = err.status || 500;
    let message = err.message || "Something went wrong!";

    if (err.name === "CastError") {
        status = 400;
        message = "Invalid ID provided.";
    }
    if (err.name === "ValidationError") {
        status = 400;
        message = Object.values(err.errors).map(e => e.message).join(", ");
    }
    if (err.code === 11000) {
        status = 400;
        const field = Object.keys(err.keyValue)[0];
        message = `Duplicate value entered for ${field}.`;
    }
    if (!res.headersSent) {
        res.status(status).render("listings/error.ejs", { status, message });
    } else {
        next(err);
    }
});
 
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});