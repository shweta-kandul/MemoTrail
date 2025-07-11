// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

async function main() {
  const ai = new GoogleGenAI({
    apiKey:import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY ,
  });
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    responseMimeType: 'application.json',
  };
  const model = 'gemini-2.5-flash-preview-04-17';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: `Generate Travel Plan for Location : Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time  travel each of the location for 3 days with each day plan with best time to visit in JSON format
`,
        },
      ],
    },
    {
      role: 'model',
      parts: [
        {
          text: `**Initiating Budget-Friendly Vegas**

I'm now focusing on understanding the core request. It's a 3-day Las Vegas trip for a couple on a budget, and the output must be JSON. My thought process is now on how to determine "cheap" and what key elements should be included.


**Clarifying Budget Constraints**

I'm currently deconstructing the "cheap budget" aspect. Considering Las Vegas's high cost, I'm focusing on off-Strip hotels, weekday stays, affordable dining (buffets, food courts, happy hours), and free activities like Strip walking. I'm prioritizing cost-effective options within the itinerary.


**Mapping Itinerary Components**

I'm now prioritizing the itinerary details. Planning for a cheap Vegas trip involves finding free or low-cost activities like exploring casinos, watching street performances, and taking advantage of happy hours. I'm focusing on the itinerary structure and how to determine each activity's duration and best time.


**Crafting the JSON Schema**

I'm now focused on the JSON structure. I'm designing a clear and concise schema to contain hotel and itinerary data, ensuring it's easy to read and use, with key-value pairs for all the necessary fields. I'm also ensuring the format is easy to parse.


**Developing Hotel and Activity Data**

Now I'm focusing on defining hotel and activity details. For hotels, I need name, address, approximate price, image URL, coordinates, rating, and a description emphasizing value. Itinerary items require name, details, image URL, coordinates, ticket pricing, time required, and the optimal time for a visit.


**Defining Hotel & Itinerary Details**

I'm currently focused on populating the hotel and itinerary data. I'm assigning approximate prices, images, ratings, descriptions and coordinates to hotels like Golden Nugget and Gold Coast. For the itinerary, I'm identifying key sights and details, image URLs, approximate times, best visiting times, and any associated costs for each day, ensuring the activities align with a budget trip.


**Structuring the JSON Output**

I'm now focused on the JSON structure, planning to use a concise, easily readable format with top-level keys for location, duration, and travelers. I'm building out keys for hotels and itinerary, including essential fields. Additionally, I'm defining array structures for detailed activities for each day within the itinerary.


**Finalizing Itinerary Details**

I've completed populating the itinerary with detailed activity information. This includes finding image URLs, coordinates, approximate durations, optimal visiting times (day or night), and time needed to travel to the next activity. I've also incorporated the estimated travel time between locations, considering a balance of walking and using public transport.


**Structuring JSON and Content**

I'm now focusing on formatting and finalizing the JSON output. I'm building top-level keys for location, duration, and travelers, then structuring an array for hotels with appropriate fields (hotelName, address, price, imageUrl, coordinates, rating, description). I'm also preparing daily itinerary arrays with the necessary place details (placeName, details, imageUrl, coordinates, price, time, bestTime, travelTime).


**Finalizing Itinerary and Structure**

I'm now focused on completing the JSON structure and content, finalizing all details. This entails determining image URLs, accurate coordinates, travel times, and best visit times. I'm ensuring data accuracy and clarity while maintaining a budget-conscious trip theme. The JSON output will be well-structured and easily readable.


`,
        },
        {
          text: `Okay, here is a 3-day cheap budget travel plan for a couple in Las Vegas, presented in JSON format as requested.

**Important Notes:**

*   **Prices:** Las Vegas prices fluctuate *significantly* based on date, day of the week, events, and booking time. The prices listed are *approximate estimates* for a cheap budget and are subject to change. Booking well in advance and choosing weekdays often results in lower prices.
*   **Hotels:** These are budget-friendly options compared to luxury resorts. "Cheap" in Vegas is relative. Prices listed are *per night* and approximate. Resort fees are common and will add to the final cost.
*   **Itinerary:** This focuses on free and low-cost activities. Food and gambling money are not included in the activity pricing.
*   **Transportation:** Walking is the cheapest. The Deuce bus runs along the Strip and downtown and is a relatively affordable option for longer distances. Rideshares (Uber/Lyft) are also available but can add up.
*   **Image URLs:** Image URLs are representative and sourced from publicly available images. Their availability and stability cannot be guaranteed long-term. Geo coordinates are approximate centers for the locations.

\`\`\`json
{
  "location": "Las Vegas, Nevada, USA",
  "duration": "3 Days",
  "travelers": "Couple",
  "budget": "Cheap",
  "description": "A 3-day itinerary for a couple on a cheap budget in Las Vegas, focusing on free attractions, affordable eats, and exploring iconic locations without breaking the bank.",
  "hotels": [
    {
      "hotelName": "Golden Nugget Hotel & Casino",
      "address": "129 Fremont St, Las Vegas, NV 89101",
      "priceRange": "$60 - $120+ USD (approx. per night, varies heavily)",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Golden_Nugget_Las_Vegas.JPG/1280px-Golden_Nugget_Las_Vegas.JPG",
      "geoCoordinates": {
        "latitude": 36.171560,
        "longitude": -115.143729
      },
      "rating": 3.9,
      "description": "Located downtown on the Fremont Street Experience. Offers a classic Vegas feel with good value, famous shark tank pool (small fee for non-guests sometimes, check policies), and easy access to downtown attractions."
    },
    {
      "hotelName": "Gold Coast Hotel and Casino",
      "address": "4000 W Flamingo Rd, Las Vegas, NV 89103",
      "priceRange": "$50 - $100+ USD (approx. per night, varies heavily)",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Gold_Coast_Hotel_and_Casino.jpg/1280px-Gold_Coast_Hotel_and_Casino.jpg",
      "geoCoordinates": {
        "latitude": 36.115493,
        "longitude": -115.194612
      },
      "rating": 3.8,
      "description": "Located just off the Strip (about a 15-20 minute walk or short ride/bus), offering significantly lower prices than central Strip hotels. Has its own casino, restaurants, and amenities."
    },
    {
      "hotelName": "Luxor Hotel & Casino",
      "address": "3900 S Las Vegas Blvd, Las Vegas, NV 89119",
      "priceRange": "$60 - $120+ USD (approx. per night, varies heavily)",
      "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Luxor_Hotel_in_Las_Vegas.jpg/1280px-Luxor_Hotel_in_Las_Vegas.jpg",
      "geoCoordinates": {
        "latitude": 36.095532,
        "longitude": -115.175244
      },
      "rating": 3.9,
      "description": "Distinct pyramid-shaped hotel on the south end of the Strip. Often offers competitive prices. Connected via walkways/trams to Excalibur and Mandalay Bay. Easy to explore the south Strip on foot."
    }
  ],
  "itinerary": {
    "day1": [
      {
        "placeName": "Arrival & Check-in",
        "placeDetails": "Arrive in Las Vegas, head to your chosen budget-friendly hotel, and check in. Leave luggage and get ready to explore.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/McCarran_International_Airport_Terminal_3_%28cropped%29.jpg/1280px-McCarran_International_Airport_Terminal_3_%28cropped%29.jpg",
        "geoCoordinates": {
          "latitude": 36.0800,
          "longitude": -115.1522
        },
        "ticketPricing": "Varies (transportation cost)",
        "estimatedTimeAtLocation": "1-2 hours (including travel from airport)",
        "bestTimeToVisit": "Anytime"
      },
      {
        "placeName": "Explore South Strip (Luxor, Excalibur, NY-NY)",
        "placeDetails": "Start exploring the hotels on the south end. Walk through the Luxor pyramid, cross to Excalibur's medieval theme, and walk across the bridge to the New York-New York replica skyline and roller coaster (watching is free!). Focus on the free-to-explore lobbies and exteriors.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Luxor%2C_Excalibur%2C_and_New_York-New_York_from_the_air_in_Las_Vegas%2C_Nevada.jpg/1280px-Luxor%2C_Excalibur%2C_and_New_York-New_York_from_the_air_in_Las_Vegas%2C_Nevada.jpg",
        "geoCoordinates": {
          "latitude": 36.0988,
          "longitude": -115.1755
        },
        "ticketPricing": "Free (exploring)",
        "estimatedTimeAtLocation": "2-3 hours",
        "bestTimeToVisit": "Afternoon/Early Evening",
        "travelTimeToNext": "10-15 mins (walk)"
      },
      {
        "placeName": "Bellagio Fountains Show",
        "placeDetails": "Watch the iconic free water show choreographed to music in front of the Bellagio hotel. Shows run every 15-30 minutes in the evening.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Bellagio_Fountains_by_Night.jpg/1280px-Bellagio_Fountains_by_Night.jpg",
        "geoCoordinates": {
          "latitude": 36.1127,
          "longitude": -115.1723
        },
        "ticketPricing": "Free",
        "estimatedTimeAtLocation": "30-45 minutes (to watch a couple of shows)",
        "bestTimeToVisit": "Evening/Night",
        "travelTimeToNext": "5-10 mins (walk)"
      },
      {
        "placeName": "Bellagio Conservatory & Botanical Gardens",
        "placeDetails": "Step inside the Bellagio to see the stunning, elaborately decorated seasonal displays in the conservatory. It's a beautiful, free artistic escape.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Conservatory_Bellagio_Las_Vegas.jpg/1280px-Conservatory_Bellagio_Las_Vegas.jpg",
        "geoCoordinates": {
          "latitude": 36.1130,
          "longitude": -115.1730
        },
        "ticketPricing": "Free",
        "estimatedTimeAtLocation": "30-45 minutes",
        "bestTimeToVisit": "Anytime (beautifully lit at night)",
        "travelTimeToNext": "Varies (walk/bus/rideshare back to hotel)"
      }
    ],
    "day2": [
      {
        "placeName": "Explore Mid-Strip (Paris, Venetian, Caesars Exteriors)",
        "placeDetails": "Walk or take the Deuce bus north along the Strip. Admire the Eiffel Tower replica at Paris Las Vegas, wander through the Grand Canal Shoppes area at The Venetian (even if not buying), and see the Roman architecture of Caesars Palace and the Forum Shops facade.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Paris_Las_Vegas_2017.jpg/1280px-Paris_Las_Vegas_2017.jpg",
        "geoCoordinates": {
          "latitude": 36.1149,
          "longitude": -115.1705
        },
        "ticketPricing": "Free (exploring exteriors/common areas)",
        "estimatedTimeAtLocation": "2-3 hours",
        "bestTimeToVisit": "Morning/Afternoon",
        "travelTimeToNext": "30-45 mins (Deuce bus or rideshare to Downtown)"
      },
      {
        "placeName": "Fremont Street Experience (Downtown)",
        "placeDetails": "Head downtown to the pedestrian mall. Experience the Viva Vision light canopy shows, watch street performers, and enjoy the lively atmosphere of classic Vegas casinos. Explore the lobbies of historic casinos like the Golden Nugget or Circa.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Fremont_Street_Experience_Viva_Vision_at_night.jpg/1280px-Fremont_Street_Experience_Viva_Vision_at_night.jpg",
        "geoCoordinates": {
          "latitude": 36.1704,
          "longitude": -115.1430
        },
        "ticketPricing": "Free (main experience, performances)",
        "estimatedTimeAtLocation": "2-3 hours",
        "bestTimeToVisit": "Evening/Night (for light shows and performers)",
        "travelTimeToNext": "Varies (walk to nearby dinner or bus/rideshare back to hotel)"
      },
      {
        "placeName": "Downtown Container Park",
        "placeDetails": "A small, unique outdoor shopping and entertainment area made of shipping containers. Features small shops, art installations, and a treehouse playground. Free to enter and wander.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Las_Vegas_Downtown_Container_Park.JPG/1280px-Las_Vegas_Downtown_Container_Park.JPG",
        "geoCoordinates": {
          "latitude": 36.1686,
          "longitude": -115.1384
        },
        "ticketPricing": "Free (entry)",
        "estimatedTimeAtLocation": "45 mins - 1 hour",
        "bestTimeToVisit": "Afternoon/Early Evening",
        "travelTimeToNext": "Varies (walk to nearby dinner or bus/rideshare back to hotel)"
      }
    ],
    "day3": [
      {
        "placeName": "Pinball Hall of Fame",
        "placeDetails": "A large arcade featuring vintage and modern pinball machines. Entry is free, and you only pay to play the machines (using quarters). A fun, nostalgic, and relatively cheap way to spend an hour or two.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Pinball_Hall_of_Fame_Las_Vegas.jpg/1280px-Pinball_Hall_of_Fame_Las_Vegas.jpg",
        "geoCoordinates": {
          "latitude": 36.0964,
          "longitude": -115.1467
        },
        "ticketPricing": "$0.25 - $1.00 per game (approx.)",
        "estimatedTimeAtLocation": "1-2 hours",
        "bestTimeToVisit": "Morning/Afternoon",
        "travelTimeToNext": "Varies (bus/rideshare depending on next destination)"
      },
      {
        "placeName": "Walk The Strip (Revisit Favorite or See New)",
        "placeDetails": "Depending on your flight schedule, take some time to revisit a favorite spot on the Strip or explore a hotel you missed. Options include wandering through the Wynn/Encore lobbies (very luxurious), seeing the flamingos at the Flamingo hotel, or just people-watching.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Las_Vegas_Strip_at_night.jpg/1280px-Las_Vegas_Strip_at_night.jpg",
        "geoCoordinates": {
          "latitude": 36.1147,
          "longitude": -115.1729
        },
        "ticketPricing": "Free (walking)",
        "estimatedTimeAtLocation": "1-2 hours",
        "bestTimeToVisit": "Morning/Afternoon",
        "travelTimeToNext": "Varies (travel to airport)"
      },
      {
        "placeName": "Departure",
        "placeDetails": "Check out from the hotel and head to the airport for departure.",
        "imageUrl": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/McCarran_International_Airport_Terminal_3_%28cropped%29.jpg/1280px-McCarran_International_Airport_Terminal_3_%28cropped%29.jpg",
        "geoCoordinates": {
          "latitude": 36.0800,
          "longitude": -115.1522
        },
        "ticketPricing": "Varies (transportation cost)",
        "estimatedTimeAtLocation": "2-3 hours (including travel to airport)",
        "bestTimeToVisit": "Anytime"
      }
    ]
  }
}
\`\`\``,
        },
      ],
    },
    {
      role: 'user',
      parts: [
        {
          text: `INSERT_INPUT_HERE`,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let fileIndex = 0;
  for await (const chunk of response) {
    console.log(chunk.text);
  }
}

main();
