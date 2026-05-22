const Listing = require("../models/listing");
// At the top of your file
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));



module.exports.home = async (req,res)=>{
    // let listings = await Listing.find({});
    // res.render("listings/home.ejs",{listings});

    const { q ,category} = req.query; // get search term
    let listings;

    if (q) {
        // Case-insensitive search by location or city
        listings = await Listing.find({
            $or: [
                { location: { $regex: q, $options: "i" } },
                { country: { $regex: q, $options: "i" } },
                { title: { $regex: q, $options: "i" } }
            ]
        });

    } 
    
    else if(category){
        listings = await Listing.find({ category: { $in: [category] } });
    } 
    
    else {
        // If no search query, show all listings
        listings = await Listing.find({});
    }

    res.render("listings/home", { listings });
};


module.exports.renderNewForm = (req,res)=>{
    res.render("listings/new");
}

module.exports.createNewListing = async (req, res) => {
    
        let newListing = new Listing(req.body.listing);
        let address = req.body.listing.location + " " + req.body.listing.country;
        console.log("Address:", address);

        // Use Nominatim API to get coordinates
        let response = await fetch(
            `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
        );
        let data = await response.json();

        if(data.length > 0){
            let lat = parseFloat(data[0].lat);
            let lon = parseFloat(data[0].lon);

            newListing.geometry = {
                type: "Point",
                coordinates: [lon, lat] // store as [longitude, latitude]
            };
        } else {
            console.log("Address not found");
        }

        if(req.file){
            let url = req.file.path;
            let filename = req.file.filename;
            newListing.image = { url, filename };
        }

        newListing.owner = req.user._id;

        await newListing.save();
        req.flash("success", "New Listing Created successfully!");
        res.redirect("/listing");
   
};
module.exports.showListings = async (req,res)=>{
    let {id}=req.params;
    let data = await Listing.findById(id)
        .populate({
            path: "reviews",
            populate: {
                path: "author"
            }
        }) 
        .populate("owner")

    if(!data){
        req.flash("error", "The listing you are looking for does not exist.");
        return res.redirect("/listing");
    } 
    res.render("listings/show.ejs",{data});

}

module.exports.renderUpdateForm = async(req,res) =>{
     let {id} = req.params;
     let data = await Listing.findById(id);
     if(!data){
        req.flash("error", "The listing you are looking for does not exist.");
        return res.redirect("/listing");
    } 
    
        let originalImageUrl = data.image.url;

        originalImageUrl = originalImageUrl.replace(
            "/upload",
            "/upload/w_250,h_250,c_fill"
        );

        
    
     res.render("listings/edit",{data,originalImageUrl});
    
}

module.exports.updateListing = async (req, res) => {
    
        let { id } = req.params;

        // First, find the listing to update
        let listing = await Listing.findById(id);
        if (!listing) {
            req.flash("error", "Listing not found!");
            return res.redirect("/listing");
        }

        // Update basic fields from form
        Object.assign(listing, req.body.listing);

        // Handle new image if uploaded
        if (req.file) {
            listing.image = {
                url: req.file.path,
                filename: req.file.filename
            };
        }

        // Handle geocoding if address updated
        if (req.body.listing.location || req.body.listing.country) {
            let address = (req.body.listing.location || listing.location) + " " + 
                          (req.body.listing.country || listing.country);

            // Fetch coordinates from Nominatim
            let response = await fetch(
                `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`
            );
            let data = await response.json();

            if (data.length > 0) {
                let lat = parseFloat(data[0].lat);
                let lon = parseFloat(data[0].lon);

                listing.geometry = {
                    type: "Point",
                    coordinates: [lon, lat]
                };
            } else {
                console.log("Address not found");
            }
        }

        await listing.save();

        req.flash("success", "Listing Updated successfully!");
        res.redirect(`/listing/${id}`);
};

module.exports.destroyListing = async(req,res)=>{
    let {id} = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success","Listing Deleted successfully!") ;   
    res.redirect("/listing");
}