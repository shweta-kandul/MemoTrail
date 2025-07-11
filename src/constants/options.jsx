export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in exploration",
    icon: "✈️",
    people: "1 People",
  },

  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: "🥂",
    people: "2 People",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adv",
    icon: "🏡",
    people: "3 to 5 People",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seeks",
    icon: "🚞",
    people: "5 to 10 People",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💶",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about cost",
    icon: "💸",
  },
];

// export const AI_PROMPT =
//   "Generate Travel Plan for Location:{location} for {totalDays} Days for {traveler} with a {budget} budget,give me Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating , descriptions and suggest  itinerary with  PlaceName, Place Details, place Image url, Geo coordinates, ticket Pricing ,Time travel each of the location for {totalDays} days with each day plan with best time to visit in JSON format.";

// export const AI_PROMPT = `
// Generate a 3-day travel plan in JSON format for {location}, for {traveler}, with a {budget} budget.

// 1. Include a list of 2 budget hotels with:
//   - hotelName
//   - hotelAddress
//   - approximate pricePerNight in INR
//   - starRating (1 to 5)
//   - shortDescription

// 2. For each day, give an itinerary with 2 suggested places:
//   - placeName
//   - shortDetails (1-2 lines)
//   - estimated ticketPricing (if any)
//   - estimated travelTime (like "30 mins", "1 hour")
//   - bestTimeToVisit ("Morning", "Afternoon", etc.)

// ⚠️ Do not include placeholders like "Search Online" or "Placeholder". Return only simulated real values (reasonable estimates).

// Format the full output as a valid JSON object.
// `;

// export const AI_PROMPT = `
// Generate a 3-day travel plan in JSON format for {location}, for {traveler}, with a {budget} budget.

// 1. Include 2 hotel options with:
//   - hotelName
//   - hotelAddress
//   - approximatePricePerNight (in INR)
//   - starRating (1 to 5)
//   - shortDescription
//   - imageUrl (use sample image URLs, e.g., from Unsplash)

// 2. For each day, give an itinerary with 2 places:
//   - placeName
//   - shortDetails
//   - estimatedTicketPricing
//   - estimatedTravelTime (e.g. "45 mins")
//   - bestTimeToVisit
//   - imageUrl (use sample image URLs or Unsplash)

// ⚠️ Do not use placeholders. Instead, provide realistic-looking image URLs such as:
// "https://source.unsplash.com/featured/?hotel" or
// "https://source.unsplash.com/featured/?temple"

// Return a valid JSON object.
// `;


export const AI_PROMPT = `
Generate a detailed travel plan in valid JSON format with the following structure:

1. tripName: A name for the trip
2. travelerCount: Total number of people traveling
3. budget: Type of budget (Cheap, Moderate, Luxury)
4. location: Travel destination (replace with {location})
5. duration: Total number of days (replace with {totalDays})

6. hotels: Provide a list of at least 2 hotel options with the following fields for each:
   - hotelName
   - hotelAddress
   - pricePerNight
   - hotelImageUrl (realistic placeholder or search-based URL)
   - geoCoordinates (latitude and longitude)
   - rating (out of 5)
   - description

7. itinerary: Plan for each day (based on {totalDays}) as an array of days. For each day:
   - day: Day number
   - bestTimeToExplore
   - places: A list of 2-3 places to visit with fields:
     - placeName
     - placeDetails
     - placeImageUrl (realistic placeholder or search-based URL)
     - geoCoordinates (latitude and longitude)
     - ticketPricing
     - travelTimeFromPreviousLocation

Please ensure the response is a properly formatted JSON object.

Location: {location}
Days: {totalDays}
Travelers: {traveler}
Budget: {budget}
`;
