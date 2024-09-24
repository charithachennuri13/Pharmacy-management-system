const express = require('express');
const router = express.Router();
const CourseReview = require('../models/CourseReview'); // Adjust the path if necessary
const ctrlLocations = require('../controllers/locations')
// POST route to handle review submission
router.post('/review', async (req, res) => {
    try {
        const { name, rating, review } = req.body;
console.log(name)
        // Basic validation
        if (!name || !rating || !review) {
            return res.status(400).send('All fields are required');
        }

        // Create a new review instance
        const newReview = new CourseReview({ name, rating, review });

        // Save the review to the database
        await newReview.save();

        // Redirect to locations after successful submission
        res.redirect('/'); // Adjust redirect as needed
    } catch (error) {
        console.error('Error saving review:', error);
        res.status(500).send('Internal Server Error'); // Changed to more descriptive message
    }
});

// Inside reviews.js
router.get('/review/new', (req, res) => {
    console.log('Add Review route hit'); // Debug statement
    res.render('location-review-form.jade', {
        title: 'Review on Loc8r',
        pageHeader: { title: 'Add Your Review' }
      });
  });
  router.get('/all/reviews', async (req, res) => {
    try {
        const reviews = await CourseReview.find();        
        res.json({
            title: 'All Customer Reviews',
            reviews: reviews.length ? reviews : []  
        });
        // res.redirect("/")
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).send('Internal Server Error');
    }
});


  

module.exports = router;
