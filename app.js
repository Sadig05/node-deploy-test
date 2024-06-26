import express from "express";
import cors from "cors";
const places = [

      {
        id: 1,
        createdDateTime: "2023-04-11T10:30:00Z",
        img: "https://images.pexels.com/photos/5563472/pexels-photo-5563472.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        title: "Luxe villa in Alicante",
        location: "Murcia, Costa Cálida, Spanje",
        about: [
          "3 Slaapkamers",
          "2 Badkamers"
        ],
        price: 750000,
        type: "Villa"
      },
      {
        id: 2,
        createdDateTime: "2023-04-11T10:32:00Z",
        img: "https://images.unsplash.com/photo-1628870571248-4f5db428986c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzJTIwdmlsbGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        title: "Stunning beachfront villa in Ibiza",
        location: "Ibiza, Balearic Islands, Spain",
        about: [
          "4 Bedrooms",
          "3 Bathrooms",
          "Private pool",
          "Direct beach access"
        ],
        price: 1200000,
        type: "Villa"
      },
      {
        id: 3,
        createdDateTime: "2023-04-11T10:34:00Z",
        img: "https://plus.unsplash.com/premium_photo-1661962821338-c07da63995f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzJTIwdmlsbGFzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
        title: "Elegant townhouse in Seville",
        location: "Seville, Andalusia, Spain",
        about: [
          "3 Bedrooms",
          "2 Bathrooms",
          "Rooftop terrace",
          "Historic district"
        ],
        price: 550000,
        type: "Townhouse"
      },
      {
        id: 4,
        createdDateTime: "2023-04-11T10:36:00Z",
        img: "https://media.istockphoto.com/id/1044560218/photo/luxury-holiday-villa-with-infinity-pool-at-sunset.jpg?b=1&s=612x612&w=0&k=20&c=bgHEwkCGEJQF_WHiSVRa7epRK2em3sNK1ZfKp-Wgqhs=",
        title: "Luxury apartment in Madrid",
        location: "Madrid, Community of Madrid, Spain",
        about: [
          "2 Bedrooms",
          "2 Bathrooms",
          "City views",
          "High-end amenities"
        ],
        price: 980000,
        type: "Appartment"
      },
      {
        id: 5,
        createdDateTime: "2023-04-11T10:38:00Z",
        img: "https://images.unsplash.com/photo-1663659508428-9e1a9ce517d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvdGVscyUyMHZpbGxhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        title: "Rustic finca in Mallorca",
        location: "Mallorca, Balearic Islands, Spain",
        about: [
          "5 Bedrooms",
          "4 Bathrooms",
          "Large outdoor space",
          "Tranquil surroundings"
        ],
        price: 1600000,
        type: "Townhouse"
      },
      {
        id: 6,
        createdDateTime: "2023-04-11T10:40:00Z",
        img: "https://images.unsplash.com/photo-1571635685743-db0db8e31d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGhvdGVscyUyMHZpbGxhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        title: "Contemporary loft in Barcelona",
        location: "Barcelona, Catalonia, Spain",
        about: [
          "1 Bedroom",
          "1 Bathroom",
          "Modern design",
          "Central location"
        ],
        price: 450000,
        type: "Appartment"
      },
      {
        id: 7,
        createdDateTime: "2023-04-11T10:42:00Z",
        img: "https://images.unsplash.com/photo-1652868965061-a1bde8cd4c58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGhvdGVscyUyMHZpbGxhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        title: "Traditional cortijo in Granada",
        location: "Granada, Andalusia, Spain",
        about: [
          "4 Bedrooms",
          "3 Bathrooms",
          "Private pool",
          "Mountain views"
        ],
        price: 890000,
        type: "Appartment"
      },
      {
        id: 8,
        createdDateTime: "2023-04-11T10:44:00Z",
        img: "https://images.unsplash.com/photo-1571635685743-db0db8e31d9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGhvdGVscyUyMHZpbGxhc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60",
        title: "Charming chalet in the Pyrenees",
        location: "Pyrenees, Catalonia, Spain",
        about: [
          "3 Bedrooms",
          "2 Bathrooms",
          "Ski-in/ski-out",
          "Cozy fireplace"
        ],
        price: 740000,
        type: "Villa"
      }
];
const app = express();
app.use(cors());

app.use(express.json());
app.get("/places", (req, res) => {
  let filteredPlaces = places;

  // Filter by title
  if (req.query.title) {
    const title = req.query.title.toLowerCase();
    filteredPlaces = places.filter(place => place.title.toLowerCase().includes(title));
  }

  // Filter by type
  if (req.query.type) {
    const type = req.query.type.toLowerCase();
    filteredPlaces = filteredPlaces.filter(place => place.type.toLowerCase() === type);
  }

  // Sorting
  if (req.query._sort && req.query._order) {
    const sortBy = req.query._sort;
    const sortOrder = req.query._order === 'asc' ? 1 : -1;

    filteredPlaces.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1 * sortOrder;
      if (a[sortBy] > b[sortBy]) return 1 * sortOrder;
      return 0;
    });
  }

  return res.json(filteredPlaces);
});

app.get("/places/:id", (req, res) => {
  const place = places.find(place => place.id === parseInt(req.params.id));
  if (!place) {
    return res.status(404).json({ message: "Place not found" });
  }
  return res.json(place);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running...");
});