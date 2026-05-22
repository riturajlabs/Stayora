require("dotenv").config();

const mongoose = require("mongoose");
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const Listing = require("../models/listing"); // your actual Listing model

const dbUrl = process.env.ATLASDB_URL;

async function updateCoordinates() {
    try {
        await mongoose.connect(dbUrl);
        console.log("Connected to DB");

        const listings = await Listing.find({}); // get all listings

        for (let listing of listings) {
            const address = `${listing.location}, ${listing.country}`;
            console.log(`Fetching coordinates for: ${address}`);

            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
            const data = await response.json();

            if (data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lon = parseFloat(data[0].lon);

                // Update geometry field
                listing.geometry = {
                    type: "Point",
                    coordinates: [lon, lat] // GeoJSON standard
                };

                await listing.save();
                console.log(`Updated: ${listing.title} → [${lon}, ${lat}]`);
            } else {
                console.log(`Coordinates not found for: ${address}`);
            }

            // Delay to avoid hitting API rate limit
            await new Promise(r => setTimeout(r, 1000));
        }

        console.log("All listings updated!");
        mongoose.connection.close();
    } catch (err) {
        console.error(err);
    }
}

// Run the function
updateCoordinates();