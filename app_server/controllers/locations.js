/* GET 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {
    title: 'Pharmacy management system',
    pageHeader: {
    title: 'Pharmacy',
    strapline: 'The cure you want; The cure you need.'
    },
    locations: [{
    name: 'Apollo Pharmacy',
    address: 'D#8A-5, Venkatadri Township, Korremula Rd, Narepally, Hyderabad, Telangana 500088',
    rating: 3,
    facilities: ['Clinical Services', 'Medication', 'Compounding'],
    distance: '100m'
    },{
    name: 'Doctors Pharmacy',
    address: '790 #1, 2, OU Colony, Shaikpet, Hyderabad, Telangana 500008',
    rating: 4,
    facilities:  ['Clinical Services', 'Medication', 'Compounding'],
    distance: '200m'
    },{
    name: '7 Hills Pharmacy',
    address: 'opposite NIMS HOSPITAL, Matha Nagar, Punjagutta, Hyderabad, Telangana 500082',
    rating: 2,
    facilities: ['Medication', 'Compounding'],
    distance: '250m'
}]
});
};
    /* GET 'Location info' page */
    const locationInfo = (req, res) => {
    res.render('location-info', { title: 'Location info' });
    };
    /* GET 'Add review' page */
    const addReview = (req, res) => {
    res.render('location-addreview', { title: 'Add review' });
    };
    module.exports = {
        homelist,
        locationInfo,
        addReview
        };