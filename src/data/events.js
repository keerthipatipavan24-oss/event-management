const events = [
  {
    id: 1,
    title: "Music Festival",
    date: "20 December 2026",
    venue: "Bengaluru",
    price: 1499,
    category: "Music",
    image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=800",
    description:
      "Experience an unforgettable evening filled with live music and entertainment. Enjoy performances from talented singers, musicians and popular artists. Celebrate with friends in an energetic festival atmosphere. Make memories with incredible music, lights and performances.",
    agenda: [
      { time: "04:00 PM", title: "Entry & Registration" },
      { time: "05:00 PM", title: "Opening DJ Performance" },
      { time: "06:00 PM", title: "Live Music Performances" },
      { time: "07:30 PM", title: "Special Guest Performance" },
      { time: "09:00 PM", title: "Main Stage Concert" },
      { time: "10:30 PM", title: "Festival Closing" },
    ],
    ticketPackages: [
      {
        name: "Normal",
        price: 1499,
        features: [
          "General festival entry",
          "Standard viewing area",
          "Access to all performances",
        ],
      },
      {
        name: "VIP",
        price: 2999,
        features: [
          "Priority festival entry",
          "Premium viewing area",
          "Exclusive lounge access",
          "Complimentary refreshments",
        ],
      },
    ],
  },
  {
    id: 2,
    title: "City Marathon",
    date: "5 January 2027",
    venue: "Hyderabad",
    price: 499,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800",
    description:
      "Challenge yourself in an exciting city-wide running event. Participate alongside fitness enthusiasts and professional runners. Choose your pace and enjoy a motivating sporting atmosphere. Celebrate fitness, health and community spirit.",
    agenda: [
      { time: "05:00 AM", title: "Participant Check-in" },
      { time: "05:30 AM", title: "Warm-up Session" },
      { time: "06:00 AM", title: "Marathon Flag-off" },
      { time: "08:00 AM", title: "Refreshment Break" },
      { time: "09:00 AM", title: "Awards & Recognition" },
      { time: "10:00 AM", title: "Event Closing" },
    ],
    ticketPackages: [
      {
        name: "Normal",
        price: 499,
        features: ["Marathon participation", "Participant bib", "Refreshments"],
      },
      {
        name: "VIP",
        price: 999,
        features: [
          "Priority check-in",
          "Premium participant kit",
          "Exclusive refreshments",
          "VIP seating at award ceremony",
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Cricket Match",
    date: "15 January 2027",
    venue: "Hyderabad",
    price: 999,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800",
    description:
      "Enjoy an exciting cricket match featuring competitive teams and talented players. Experience thrilling moments and unforgettable sporting action. Cheer for your favourite teams with fellow cricket fans. Be part of an energetic day of cricket entertainment.",
    agenda: [
      { time: "08:00 AM", title: "Gate Opening" },
      { time: "09:00 AM", title: "Opening Ceremony" },
      { time: "09:30 AM", title: "First Match" },
      { time: "12:30 PM", title: "Lunch Break" },
      { time: "02:00 PM", title: "Final Match" },
      { time: "05:00 PM", title: "Prize Distribution" },
    ],
    ticketPackages: [
      {
        name: "Normal",
        price: 999,
        features: ["General stadium entry", "Standard seating", "Match access"],
      },
      {
        name: "VIP",
        price: 1999,
        features: [
          "Priority stadium entry",
          "Premium seating",
          "Exclusive hospitality area",
          "Complimentary refreshments",
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Food Festival",
    date: "20 January 2027",
    venue: "Bengaluru",
    price: 599,
    category: "Food",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    description:
      "Explore a delicious celebration of food, flavours and culinary creativity. Taste dishes prepared by talented chefs and local food vendors. Discover regional specialities and international cuisines. Enjoy a memorable experience filled with great food and entertainment.",
    agenda: [
      { time: "11:00 AM", title: "Festival Opening" },
      { time: "11:30 AM", title: "Food Stalls Open" },
      { time: "12:30 PM", title: "Live Cooking Demonstration" },
      { time: "02:00 PM", title: "Regional Food Showcase" },
      { time: "04:00 PM", title: "Chef Special Presentation" },
      { time: "06:00 PM", title: "Festival Closing" },
    ],
    ticketPackages: [
      {
        name: "Normal",
        price: 599,
        features: [
          "Festival entry",
          "Access to all food stalls",
          "Cooking demonstrations",
        ],
      },
      {
        name: "VIP",
        price: 1199,
        features: [
          "Priority entry",
          "Exclusive tasting experience",
          "Premium seating",
          "Special chef interaction",
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Photography Exhibition",
    date: "25 January 2027",
    venue: "Chennai",
    price: 399,
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800",
    description:
      "Explore creative photography and stunning visual storytelling. Discover unique perspectives captured by talented photographers. Experience different photography styles and artistic collections. Meet creative professionals and celebrate the art of photography.",
    agenda: [
      { time: "10:00 AM", title: "Exhibition Opening" },
      { time: "11:00 AM", title: "Photography Gallery Tour" },
      { time: "12:30 PM", title: "Artist Interaction" },
      { time: "01:30 PM", title: "Lunch Break" },
      { time: "02:30 PM", title: "Photography Demonstration" },
      { time: "04:00 PM", title: "Exhibition Closing" },
    ],
    ticketPackages: [
      {
        name: "Normal",
        price: 399,
        features: [
          "Exhibition entry",
          "Access to photography galleries",
          "Standard gallery tour",
        ],
      },
      {
        name: "VIP",
        price: 799,
        features: [
          "Priority entry",
          "Guided gallery tour",
          "Artist interaction",
          "Exclusive photography session",
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Dance Festival",
    date: "30 January 2027",
    venue: "Chennai",
    price: 499,
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=800",
    description:
      "Celebrate the beauty of traditional Indian dance and cultural heritage. Enjoy captivating performances by talented classical and folk dancers. Experience vibrant costumes, traditional music and graceful choreography. Discover the richness of Indian culture through an unforgettable artistic celebration.",
    agenda: [
      { time: "04:00 PM", title: "Guest Welcome & Registration" },
      { time: "04:30 PM", title: "Opening Cultural Performance" },
      { time: "05:00 PM", title: "Bharatanatyam Performance" },
      { time: "06:00 PM", title: "Kuchipudi & Folk Dance" },
      { time: "07:00 PM", title: "Special Dance Performances" },
      { time: "08:00 PM", title: "Grand Finale & Closing" },
    ],
    ticketPackages: [
      {
        name: "Normal",
        price: 499,
        features: [
          "General event entry",
          "Standard seating",
          "Access to all performances",
        ],
      },
      {
        name: "VIP",
        price: 999,
        features: [
          "Priority event entry",
          "Premium front-row seating",
          "Exclusive cultural experience",
          "Complimentary refreshments",
        ],
      },
    ],
  },
  {
    id: 7,
    title: "Art Exhibition",
    date: "5 February 2027",
    venue: "Hyderabad",
    price: 299,
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800",
    description:
      "Discover creativity through an exciting exhibition of art and handmade crafts. Explore paintings, sculptures and unique handmade creations. Meet talented artists and learn about their creative processes. Celebrate imagination, craftsmanship and artistic expression.",
    agenda: [
      { time: "10:00 AM", title: "Exhibition Opening" },
      { time: "11:00 AM", title: "Art Gallery Tour" },
      { time: "12:00 PM", title: "Live Painting Session" },
      { time: "01:00 PM", title: "Lunch Break" },
      { time: "02:00 PM", title: "Handicraft Workshop" },
      { time: "04:00 PM", title: "Artist Interaction & Closing" },
    ],
    ticketPackages: [
      {
        name: "Normal",
        price: 299,
        features: [
          "Exhibition entry",
          "Access to art galleries",
          "Artist demonstrations",
        ],
      },
      {
        name: "VIP",
        price: 599,
        features: [
          "Priority entry",
          "Guided exhibition tour",
          "Hands-on art workshop",
          "Exclusive artist interaction",
        ],
      },
    ],
  },
  {
    id: 8,
    title: "Comedy Show",
    date: "10 February 2027",
    venue: "Bengaluru",
    price: 499,
    category: "Entertainment",
    image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=800",
    description:
      "Get ready for an evening filled with laughter and entertainment. Enjoy hilarious performances from talented stand-up comedians. Experience relatable stories, clever jokes and spontaneous audience interactions. Spend a fun-filled evening with friends and family.",
    agenda: [
      { time: "06:00 PM", title: "Audience Entry" },
      { time: "06:30 PM", title: "Welcome & Introduction" },
      { time: "07:00 PM", title: "Opening Comedy Act" },
      { time: "07:45 PM", title: "Special Guest Comedian" },
      { time: "08:30 PM", title: "Main Comedy Performance" },
      { time: "09:30 PM", title: "Event Closing" },
    ],
    ticketPackages: [
      {
        name: "Normal",
        price: 499,
        features: [
          "General event entry",
          "Standard seating",
          "Access to all comedy acts",
        ],
      },
      {
        name: "VIP",
        price: 999,
        features: [
          "Priority entry",
          "Premium front-row seating",
          "Exclusive meet and greet",
          "Complimentary refreshments",
        ],
      },
    ],
  },
  {
    id: 9,
    title: "Pottery Workshop",
    date: "15 February 2027",
    venue: "Vijayawada",
    price: 399,
    category: "Cultural",
    image: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=800",
    description:
      "Discover the art of pottery through a fun and creative hands-on workshop. Learn basic pottery techniques and create your own clay artwork with guidance from skilled instructors. Explore traditional craftsmanship and enjoy a relaxing artistic experience. Perfect for beginners and art enthusiasts.",
    agenda: [
      { time: "10:00 AM", title: "Workshop Registration" },
      { time: "10:30 AM", title: "Introduction to Pottery" },
      { time: "11:30 AM", title: "Clay Preparation" },
      { time: "01:00 PM", title: "Lunch Break" },
      { time: "02:00 PM", title: "Hands-on Pottery Making" },
      { time: "04:00 PM", title: "Artwork Display & Closing" },
    ],
    ticketPackages: [
      {
        name: "Normal",
        price: 399,
        features: [
          "Workshop entry",
          "Basic pottery materials",
          "Guided pottery session",
        ],
      },
      {
        name: "VIP",
        price: 799,
        features: [
          "Priority workshop entry",
          "Premium pottery materials",
          "One-to-one instructor guidance",
          "Take-home pottery kit",
        ],
      },
    ],
  },
];

export default events;
