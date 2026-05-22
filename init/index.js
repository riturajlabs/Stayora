const mongoose = require("mongoose");

const initData = require("./data.js");

const Listing = require("../models/listing.js");

const Review = require("../models/review.js");

const User = require("../models/user.js");


// DATABASE CONNECTION

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


// INIT DATABASE

async function initDB(){

    // clear old data

    await Listing.deleteMany({});
    await Review.deleteMany({});


    // find users

    const users = await User.find({

        username: {
            $in: [
                "ritu_raaz",
                "prajkta_shrivastav",
                "gagan_poddar",
                "dipak_kumar",
                "varun_manoj",
                "sumit_jha",
                "subham_kumar",
                "nikhil_jha",
            ]
        }

    });


    // user check

    if(users.length === 0){

        console.log(
            "Users not found. Please signup first."
        );

        return;
    }


    // sample reviews

    const sampleReviews = [

        {
            rating: 5,
            comments: "Absolutely loved this property from the moment we arrived. The rooms were spacious, beautifully decorated, and extremely clean. The peaceful environment and excellent hospitality made the stay memorable and relaxing.",
            author: users[0]._id
        },

        {
            rating: 4,
            comments: "Very comfortable and enjoyable experience overall. The location was convenient, the rooms were clean, and the host was polite and responsive during the entire stay.",
            author: users[1]._id
        },

        {
            rating: 5,
            comments: "One of the best stays I have experienced in a long time. The interiors looked elegant and modern while still feeling cozy and welcoming. Everything was properly maintained.",
            author: users[2]._id
        },

        {
            rating: 4,
            comments: "The property had a calm atmosphere and all the required facilities for a relaxing vacation. The nearby attractions and restaurants added extra convenience to the experience.",
            author: users[3]._id
        },

        {
            rating: 5,
            comments: "Amazing hospitality and beautiful surroundings. The rooms were spacious, clean, and thoughtfully designed. Would definitely love to visit this place again in the future.",
            author: users[4]._id
        },
        {
            rating: 5,
            comments: "The entire experience was absolutely wonderful from check-in to checkout. The property was clean, modern, and beautifully maintained. The peaceful surroundings and comfortable atmosphere made this one of the most relaxing stays I have had in a long time.",
            author: users[5]._id
        },

        {
            rating: 4,
            comments: "Really enjoyed staying at this property for a weekend getaway. The rooms were spacious, the amenities were well organized, and the location was very convenient for exploring nearby attractions and cafes. Overall, it was a smooth and enjoyable experience.",
            author: users[6]._id
        },

        {
            rating: 5,
            comments: "This place exceeded expectations in every possible way. The interior design looked elegant and cozy at the same time, and the host was extremely helpful throughout the stay. I would definitely recommend this property to anyone looking for comfort and relaxation.",
            author: users[1]._id
        },

    ];


    // insert reviews

    const createdReviews =
    await Review.insertMany(sampleReviews);


    // create listings

    initData.data = initData.data.map((obj, index) => ({

        ...obj,

        // random owner

        owner: users[
            index % users.length
        ]._id,

        // all reviews

        reviews: createdReviews.map(
            (review) => review._id
        )

    }));


    // insert listings

    await Listing.insertMany(initData.data);

    console.log(
        "Database Initialized Successfully"
    );

}


initDB();