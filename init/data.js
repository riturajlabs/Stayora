const owners = [
    "ritu_raaz",
    "prajkta_shrivastav",
    "gagan_poddar",
    "dipak_kumar",
    "varun_manoj",
    "sumit_jha",
    "subham_kumar",
    "nikhil_jha"
];

const categories = [
    "Trending", "Rooms", "Iconic Cities", "Mountain", "Castles",
    "Amazing Pools", "Arctic", "Farms", "Campaign", "Dome"
];



const sampleListings = [

  {
  title: "Luxury Glass Villa",
  description:
    "Modern luxury villa with floor-to-ceiling glass walls and a private infinity pool.",
  image: {
    url:
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 5200,
  location: "Beverly Hills",
  country: "United States",
},

{
  title: "Minimalist Airbnb Loft",
  description:
    "Stylish minimalist loft with aesthetic interiors and natural lighting.",
  image: {
    url:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 2400,
  location: "Toronto",
  country: "Canada",
},

{
  title: "Private Pool Mansion",
  description:
    "Spacious mansion with luxury bedrooms and a huge private swimming pool.",
  image: {
    url:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 6800,
  location: "Miami",
  country: "United States",
},

{
  title: "Modern Hillside House",
  description:
    "Beautiful hillside property with panoramic city views and modern architecture.",
  image: {
    url:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 3900,
  location: "California",
  country: "United States",
},


{
  title: "Luxury Countryside Villa",
  description:
    "Peaceful countryside villa surrounded by greenery and open landscapes.",
  image: {
    url:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 2100,
  location: "Tuscany",
  country: "Italy",
},

{
  title: "Elegant White Mansion",
  description:
    "Premium white mansion with luxury interiors and marble flooring.",
  image: {
    url:
      "https://images.unsplash.com/photo-1613977257365-aaae5a9817ff?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 7200,
  location: "Dubai",
  country: "United Arab Emirates",
},

{
  title: "Luxury Wooden Chalet",
  description:
    "Cozy luxury wooden chalet perfect for winter vacations and mountain stays.",
  image: {
    url:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 2800,
  location: "Zermatt",
  country: "Switzerland",
},

{
  title: "Oceanfront Airbnb House",
  description:
    "Beautiful oceanfront property with direct beach access and sunset views.",
  image: {
    url:
      "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 6100,
  location: "Maldives",
  country: "Maldives",
},

{
  title: "Urban Designer Apartment",
  description:
    "Modern designer apartment with luxury furniture and rooftop access.",
  image: {
    url:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 2600,
  location: "Singapore",
  country: "Singapore",
},

{
  title: "Luxury Farmhouse Retreat",
  description:
    "Relaxing farmhouse retreat with premium interiors and outdoor gardens.",
  image: {
    url:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 1900,
  location: "Punjab",
  country: "India",
},

{
  title: "Modern Black House",
  description:
    "Aesthetic black-themed luxury house with modern smart home features.",
  image: {
    url:
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 4300,
  location: "Berlin",
  country: "Germany",
},

{
  title: "Luxury Penthouse Suite",
  description:
    "High-rise penthouse suite with skyline views and premium facilities.",
  image: {
    url:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 5500,
  location: "New York",
  country: "United States",
},


{
  title: "Traditional Countryside Home",
  description:
    "Classic countryside house with large gardens and peaceful surroundings.",
  image: {
    url:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 2600,
  location: "Texas",
  country: "United States",
},

{
  title: "Urban Penthouse Suite",
  description:
    "Premium penthouse with rooftop seating and luxury living spaces.",
  image: {
    url:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 8500,
  location: "Chicago",
  country: "United States",
},

{
  title: "Minimalist Studio Flat",
  description:
    "Compact and modern studio apartment designed for comfortable city living.",
  image: {
    url:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 1800,
  location: "Seattle",
  country: "United States",
},

{
  title: "Mountain View Chalet",
  description:
    "Luxury chalet offering breathtaking mountain scenery and cozy interiors.",
  image: {
    url:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 4700,
  location: "Swiss Alps",
  country: "Switzerland",
},



{
  title: "Luxury Desert Villa",
  description:
    "Spacious villa with desert landscapes and private outdoor lounge.",
  image: {
    url:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 5400,
  location: "Dubai",
  country: "UAE",
},

{
  title: "Lakefront Cottage",
  description:
    "Relaxing lakeside cottage with wooden interiors and scenic water views.",
  image: {
    url:
      "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 2900,
  location: "Ontario",
  country: "Canada",
},

{
  title: "Luxury Farmhouse",
  description:
    "Beautiful farmhouse surrounded by green fields and open spaces.",
  image: {
    url:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 3300,
  location: "Punjab",
  country: "India",
},

{
  title: "Classic European Mansion",
  description:
    "Historic mansion featuring elegant architecture and royal interiors.",
  image: {
    url:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 9700,
  location: "Paris",
  country: "France",
},



{
  title: "Luxury Forest Retreat",
  description:
    "Private retreat hidden in the forest with peaceful natural surroundings.",
  image: {
    url:
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 4400,
  location: "Kerala",
  country: "India",
},

{
  title: "Seaside Apartment",
  description:
    "Modern apartment with direct ocean views and airy interiors.",
  image: {
    url:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 3600,
  location: "Goa",
  country: "India",
},

{
  title: "Luxury Palace Estate",
  description:
    "Massive estate property with gardens, fountains, and premium facilities.",
  image: {
    url:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 15000,
  location: "London",
  country: "United Kingdom",
},

{
  title: "Modern Duplex House",
  description:
    "Spacious duplex with contemporary architecture and open living areas.",
  image: {
    url:
      "https://images.unsplash.com/photo-1576941089067-2de3c901e126?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 4200,
  location: "Sydney",
  country: "Australia",
},

{
  title: "Riverside Villa",
  description:
    "Calm riverside property with private balconies and scenic surroundings.",
  image: {
    url:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 5000,
  location: "Bangkok",
  country: "Thailand",
},


{
  title: "Beachside Bungalow",
  description:
    "Simple yet luxurious bungalow located near sandy beaches.",
  image: {
    url:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 3100,
  location: "Bali",
  country: "Indonesia",
},

{
  title: "Luxury Smart Home",
  description:
    "Fully automated smart house with futuristic interiors and security.",
  image: {
    url:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 8800,
  location: "San Francisco",
  country: "United States",
},

{
  title: "Countryside Stone House",
  description:
    "Rustic stone-built home with vintage charm and peaceful atmosphere.",
  image: {
    url:
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 2700,
  location: "Tuscany",
  country: "Italy",
},

{
  title: "Open Plot Near Highway",
  description:
    "Commercial open plot suitable for investment and future development.",
  image: {
    url:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 6000,
  location: "Delhi",
  country: "India",
},

{
  title: "Green Valley House",
  description:
    "Family house located in a green valley with fresh air and nature views.",
  image: {
    url:
      "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 3200,
  location: "Himachal Pradesh",
  country: "India",
},


{
  title: "Island Resort Villa",
  description:
    "Private island villa with infinity pool and tropical surroundings.",
  image: {
    url:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 12000,
  location: "Maldives",
  country: "Maldives",
},

{
  title: "Modern Family Home",
  description:
    "Comfortable family home with spacious rooms and modern kitchen setup.",
  image: {
    url:
      "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 3400,
  location: "Melbourne",
  country: "Australia",
},


{
  title: "Classic Vintage House",
  description:
    "Beautiful old-style vintage house with antique furniture and decor.",
  image: {
    url:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 2800,
  location: "Prague",
  country: "Czech Republic",
},

{
  title: "Luxury Pool Apartment",
  description:
    "Apartment complex with shared swimming pool and luxury amenities.",
  image: {
    url:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    filename: "listingimage",
  },
  price: 3900,
  location: "Singapore",
  country: "Singapore",
},
{
  title: "Skyline Luxury Condo",
  description:
    "Modern condo with breathtaking skyline views and premium facilities.",
  image: {
    url:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 6100,
  location: "Los Angeles",
  country: "United States",
},


{
  title: "Luxury Marina Villa",
  description:
    "Elegant waterfront villa with private marina access and open terraces.",
  image: {
    url:
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 9800,
  location: "Monaco",
  country: "Monaco",
},

{
  title: "Minimal White Apartment",
  description:
    "Clean and modern apartment with minimalist Scandinavian interiors.",
  image: {
    url:
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 2600,
  location: "Stockholm",
  country: "Sweden",
},

{
  title: "Open Green Plot",
  description:
    "Large green land plot ideal for farmhouse or future investment.",
  image: {
    url:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 4500,
  location: "Jaipur",
  country: "India",
},

{
  title: "Luxury Cliff House",
  description:
    "Exclusive cliffside house offering panoramic ocean and sunset views.",
  image: {
    url:
      "https://images.unsplash.com/photo-1519643381401-22c77e60520e?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 11000,
  location: "Santorini",
  country: "Greece",
},

{
  title: "Vintage Brick Home",
  description:
    "Classic brick house with vintage architecture and spacious interiors.",
  image: {
    url:
      "https://images.unsplash.com/photo-1605276373954-0c4a0dac5b12?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 3000,
  location: "Boston",
  country: "United States",
},

{
  title: "Luxury Hill Mansion",
  description:
    "Massive hilltop mansion with gardens, pool, and private driveway.",
  image: {
    url:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 14000,
  location: "Beverly Hills",
  country: "United States",
},

{
  title: "Compact Smart Studio",
  description:
    "Affordable smart studio apartment with modern furniture setup.",
  image: {
    url:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=900&q=61",
    filename: "listingimage",
  },
  price: 1700,
  location: "Mumbai",
  country: "India",
},

{
  title: "Luxury Countryside Villa",
  description:
    "Beautiful villa with countryside charm and luxurious interiors.",
  image: {
    url:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 5800,
  location: "Florence",
  country: "Italy",
},

{
  title: "Modern Duplex Apartment",
  description:
    "Two-floor duplex apartment with spacious balcony and elegant design.",
  image: {
    url:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 4300,
  location: "Seoul",
  country: "South Korea",
},

{
  title: "Wooden Lake House",
  description:
    "Peaceful wooden house near the lake with relaxing natural scenery.",
  image: {
    url:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 3500,
  location: "Vancouver",
  country: "Canada",
},

{
  title: "Luxury Penthouse Loft",
  description:
    "Premium penthouse loft with rooftop jacuzzi and city nightlife views.",
  image: {
    url:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 8900,
  location: "Las Vegas",
  country: "United States",
},

{
  title: "Modern Garden Home",
  description:
    "Family-friendly home featuring a private garden and cozy interiors.",
  image: {
    url:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 3100,
  location: "Auckland",
  country: "New Zealand",
},


{
  title: "Hill View Cabin",
  description:
    "Simple and cozy hill cabin with fresh mountain air and quiet vibes.",
  image: {
    url:
      "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 2200,
  location: "Manali",
  country: "India",
},

{
  title: "Luxury Floating Villa",
  description:
    "Unique floating villa with private deck and ocean surroundings.",
  image: {
    url:
      "https://images.unsplash.com/photo-1505692952047-1a78307da8f2?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 13500,
  location: "Bora Bora",
  country: "French Polynesia",
},

{
  title: "Luxury Riverside Mansion",
  description:
    "Massive riverside mansion with luxury interiors and scenic balconies.",
  image: {
    url:
      "https://images.unsplash.com/photo-1600047509782-20d39509f26d?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 15000,
  location: "Budapest",
  country: "Hungary",
},

{
  title: "Modern Eco House",
  description:
    "Sustainable eco-house powered by solar energy and natural ventilation.",
  image: {
    url:
      "https://images.unsplash.com/photo-1502672023488-70e25813eb80?auto=format&fit=crop&w=900&q=60",
    filename: "listingimage",
  },
  price: 4100,
  location: "Oslo",
  country: "Norway",
},

];

// ADD OWNER NAME TO EVERY LISTING

sampleListings.forEach((listing, index) => {

  listing.ownerName = owners[
    index % owners.length
  ];
  listing.category = categories[index % categories.length];

});

module.exports = { data: sampleListings };