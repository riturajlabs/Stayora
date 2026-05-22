const express = require("express");
const router = express.Router({mergeParams: true});

const ExpressError=require("../utils/ExpressError.js");
const wrapAsync = require("../utils/wrapAsync.js");


const {validateReview,isLoggedIn,saveRedirectUrl, isAuthor} = require('../middleware.js');
const reviewControler = require("../controllers/review.js");


// post review route

router.post(
    "/", 
    isLoggedIn,
    validateReview,
    wrapAsync(reviewControler.addNewReview));

// delete review route

router.delete(
    "/:reviewId",
    isLoggedIn,
    isAuthor,
    wrapAsync(reviewControler.destroyReview));


module.exports = router;