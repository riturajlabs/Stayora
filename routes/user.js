const express = require("express");
const router = express.Router();

const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const {saveRedirectUrl} = require("../middleware");
const userControler = require("../controllers/user");


router
    .route("/signup")
    .get(userControler.renderSignupForm)
    .post(wrapAsync(userControler.userSignup));


router
    .route("/login")
    .get(userControler.renderLoginForm)
    .post(
        saveRedirectUrl,
        passport.authenticate(
            "local",
            {
                failureRedirect: "/login", 
                failureFlash: true
            }
        ),

        userControler.userLoggedin
    );


router.get("/logout",userControler.userLoggedOut);

module.exports = router;