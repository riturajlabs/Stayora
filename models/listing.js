const mongoose = require("mongoose");
// const review = require("./review");
const Review = require("./review");
const { required } = require("joi");

const listingSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    image: {

        url: {
            type: String,
            default:
            "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60"
        },

        filename: {
            type: String
        }
    },
    price:{
        type:Number
    },
    location:{
        type:String
    },
    country:{
        type:String
    },
    reviews:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],

    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    geometry: {

        type: {

            type: String,

            enum: ["Point"],

            default: "Point"

        },

        coordinates: {

            type: [Number],

            required: true

        },
    

    },
    category:{
        type: String,
        required:true
    }

});

listingSchema.post("findOneAndDelete",async(listing)=>{
    if(listing){
        await Review.deleteMany({_id:{$in:listing.reviews} });
    }
})

let Listing =mongoose.model("Listing",listingSchema);
module.exports = Listing;