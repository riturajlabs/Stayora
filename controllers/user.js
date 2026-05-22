const User = require("../models/user");

module.exports.renderSignupForm = (req,res)=>{
    res.render("users/signup");
}

module.exports.userSignup =async(req,res,next)=>{
   try{
        let {firstName, lastName, username, email, password} = req.body;
        const newUser = new User({firstName, lastName, username,email});
        let registeredUser = await User.register(newUser,password);
        req.login(registeredUser,(err)=>{
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome back to StayOra App");
            res.redirect("/listing");
        })
       
   } catch(e){
        req.flash("error",e.message);
        res.redirect("/login");
   }

}

module.exports.renderLoginForm = (req,res)=>{
    res.render("users/login");
}


module.exports.userLoggedin = async (req,res)=>{
         req.flash(
            "success",
            "Welcome back to StayOra!"
         );
        res.redirect(
            res.locals.redirectUrl || "/listing"
        );
}

module.exports.userLoggedOut = (req,res,next)=>{
    req.logOut(err=>{
        if(err){
            return next(err);
        }
        req.flash("success","Logged Out Successfully.")
        res.redirect("/listing");
    })
}