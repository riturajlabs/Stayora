const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError=require("../utils/ExpressError.js");

const {validateListing,isLoggedIn,isOwner} = require("../middleware.js");
const listingController = require("../controllers/listing.js");

const multer = require("multer");

const { storage } = require("../cloudConfig");

const upload = multer({ storage });



router
    .route("/")
    .get(wrapAsync(listingController.home))
    .post(
        isLoggedIn,
        validateListing, 
        upload.single("listing[image]"), 
        wrapAsync(listingController.createNewListing)
    );
    
// new route
router.get(
    "/new",
    isLoggedIn,
    listingController.renderNewForm
    );

router
    .route("/:id")
    .get(wrapAsync(listingController.showListings))
    .put(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.updateListing)
)
    .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing));


router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.renderUpdateForm));



 module.exports = router;