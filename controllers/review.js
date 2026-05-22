const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const flash = require("connect-flash");

module.exports.addNewReview = async(req,res)=>{

    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.reviews);
        console.log(newReview);
    newReview.author = req.user._id;

    listing.reviews.push(newReview);
    await newReview.save();
    await listing.save();
    req.flash("success","Review Added Successfully!") ;  

    res.redirect(`/listing/${listing._id}`);

}


module.exports.destroyReview = async(req,res)=>{
    let {id,reviewId} = req.params;
  
    await Review.findByIdAndDelete(reviewId);
    await Listing.findByIdAndUpdate(id,{$pull:{reviews : reviewId}});
    req.flash("success","Review Deleted Successfully!") ; 
    res.redirect(`/listing/${id}`);

}