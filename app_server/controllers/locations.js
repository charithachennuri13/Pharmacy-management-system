const locations = [
  {
    name: 'Apollo Pharma',
    address: '125 High Street, Reading, RG6 1PS',
    rating: 3,
    facilities: ['Consultation Rooms', 'Prescription Services', 'Over-the-Counter Medications'],
    coords: { lat: 51.455041, lng: -0.9690884 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
      { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'Nani Nalli', rating: 5, timestamp: '2013-07-16', reviewText: 'I recently visited Apollo Pharmacy and had a largely positive experience. The store was clean, well-organized, and stocked with a wide range of products, from prescription medications to health supplements. The staff was knowledgeable and helpful, providing detailed information about the medications I needed. Pricing was competitive, with various discounts and a beneficial membership program. While the prescription filling process was smooth and efficient, some items were out of stock, which was a minor inconvenience. Additionally, the online services, including home delivery and prescription uploads, were user-friendly, although tracking could be improved. Overall, Apollo Pharmacy offers reliable service and a pleasant shopping experience, making it a recommended choice for health-related needs.' },
      { author: 'Bala Subhramanyam', rating: 3, timestamp: '2013-06-16', reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.' }
    ]
  },
  {
    name: 'NetMeds',
    address: '50 Queen Street, Reading, RG1 1QW',
    rating: 4,
    facilities: ['Vaccinations', 'health Screening', 'Medication Reviews'],
    coords: { lat: 51.456042, lng: -0.970088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '6:00am', closing: '6:00pm', closed: false },
      { days: 'Saturday', opening: '7:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'Alice Smith', rating: 4, timestamp: '2013-07-20', reviewText: 'Great atmosphere and good coffee!' },
      { author: 'Bob Johnson', rating: 2, timestamp: '2013-06-25', reviewText: 'Service was slow, but the wifi worked well.' }
    ]
  },
  {
    name: 'HealthPlus Pharmacy',
    address: '200 King Street, Reading, RG1 2AA',
    rating: 5,
    facilities: ['Home delivery', 'Mobility Services', 'Compunding Services'],
    coords: { lat: 51.457042, lng: -0.971088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '8:00am', closing: '8:00pm', closed: false },
      { days: 'Saturday', opening: '9:00am', closing: '6:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'John Doe', rating: 5, timestamp: '2013-08-10', reviewText: 'Excellent service and friendly staff.' },
      { author: 'Jane Roe', rating: 4, timestamp: '2013-08-15', reviewText: 'Good selection of products and fast wifi.' }
    ]
  },
  {
    name: 'Wellness Pharmacy',
    address: '300 Queen Street, Reading, RG1 3BB',
    rating: 4,
    facilities: ['Tele Health Services', 'Pastries', 'Free wifi'],
    coords: { lat: 51.458042, lng: -0.972088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
      { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'Emily Clark', rating: 4, timestamp: '2013-09-12', reviewText: 'Nice place with good coffee and wifi.' },
      { author: 'Michael Brown', rating: 3, timestamp: '2013-09-18', reviewText: 'Decent service but a bit crowded.' }
    ]
  },
  {
    name: 'Care Pharmacy',
    address: '400 Duke Street, Reading, RG1 4CC',
    rating: 3,
    facilities: ['Hot drinks', 'Snacks', 'Free wifi'],
    coords: { lat: 51.459042, lng: -0.973088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '8:00am', closing: '8:00pm', closed: false },
      { days: 'Saturday', opening: '9:00am', closing: '6:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'David Smith', rating: 3, timestamp: '2013-10-20', reviewText: 'Average experience, but the wifi was good.' },
      { author: 'Sarah Johnson', rating: 4, timestamp: '2013-10-25', reviewText: 'Friendly staff and good coffee.' }
    ]
  },
  {
    name: 'MedPlus Pharmacy',
    address: '500 High Road, Reading, RG2 1JS',
    rating: 4,
    facilities: ['Hot drinks', 'Food', 'Wifi'],
    coords: { lat: 51.460042, lng: -0.974088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
      { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'Mary Holmes', rating: 4, timestamp: '2013-11-12', reviewText: 'Good location, nice staff.' },
      { author: 'Tom Jones', rating: 3, timestamp: '2013-11-15', reviewText: 'The wifi was a bit slow.' }
    ]
  },
  {
    name: 'LifePharma',
    address: '600 Duke Street, Reading, RG3 2PS',
    rating: 5,
    facilities: ['Free coffee', 'Snacks', 'Premium wifi'],
    coords: { lat: 51.461042, lng: -0.975088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '6:30am', closing: '7:00pm', closed: false },
      { days: 'Saturday', opening: '7:30am', closing: '6:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'Lisa Brown', rating: 5, timestamp: '2013-12-02', reviewText: 'Fantastic service, very fast wifi.' },
      { author: 'Harry White', rating: 4, timestamp: '2013-12-10', reviewText: 'Great coffee and quiet environment.' }
    ]
  },
  {
    name: 'WellCare Pharmacy',
    address: '700 Main Street, Reading, RG4 3QS',
    rating: 4,
    facilities: ['Coffee', 'Pastries', 'Free wifi'],
    coords: { lat: 51.462042, lng: -0.976088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
      { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'Sam Hill', rating: 4, timestamp: '2014-01-08', reviewText: 'Nice atmosphere and friendly staff.' },
      { author: 'Anna Lee', rating: 3, timestamp: '2014-01-12', reviewText: 'Decent service, but slow wifi.' }
    ]
  },
  {
    name: 'CuraPharm',
    address: '800 Long Street, Reading, RG5 4WR',
    rating: 3,
    facilities: ['Snacks', 'Free wifi'],
    coords: { lat: 51.463042, lng: -0.977088 },
    openingTimes: [
      { days: 'Monday - Friday', opening: '8:00am', closing: '6:00pm', closed: false },
      { days: 'Saturday', opening: '9:00am', closing: '5:00pm', closed: false },
      { days: 'Sunday', closed: true }
    ],
    reviews: [
      { author: 'George Carter', rating: 3, timestamp: '2014-02-10', reviewText: 'Good service, but nothing special.' },
      { author: 'Nina Stone', rating: 4, timestamp: '2014-02-15', reviewText: 'Nice place for a quick stop.' }
    ]
  }
]


// Home List Route
const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'PharmaLoc8r - Find Your Nearest Pharmacy, Anytime, Anywhere',
    pageHeader: {
      title: 'PharmaLoc8r',
      strapline: 'Find Your Nearest Pharmacy, Anytime, Anywhere',
    },
    sidebar: "Searching for a pharmacy with great facilities? Our Pharmacy Locator helps you find the best spots for all your pharmaceutical needs...",
    locations: locations, // Use the locations array directly
  });
};

// Location Info Route
// Location Info Route
const locationInfo = (req, res) => {
  const locationName = req.params.name.replace(/-/g, ' ');
  const location = locations.find(loc => loc.name.toLowerCase() === locationName.toLowerCase());

  if (!location) {
    return res.status(404).send('Location not found');
  }

  res.render('location-info', {
    title: location.name,
    pageHeader: { title: location.name },
    sidebar: {
      context: `${location.name} is on Loc8r because it has great services and accessible wifi.`,
      callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.',
    },
    location: location
  });
};


// Add Review Page
const addReview = (req, res) => {
  res.render('location-review-form.jade', {
    title: 'Review on Loc8r',
    pageHeader: { title: 'Add Your Review' }
  });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
