const express = require('express');
const router = express.Router();
const CourseReview = require('../models/CourseReview'); // Adjust the path if necessary

// POST route to handle review submission
router.post('/review', async (req, res) => {
    try {
        const { name, rating, review } = req.body;

        // Basic validation
        if (!name || !rating || !review) {
            return res.status(400).send('All fields are required');
        }

        // Create a new review instance
        const newReview = new CourseReview({ name, rating, review });

        // Save the review to the database
        await newReview.save();

        // Redirect to locations after successful submission
        res.redirect('/locations'); // Adjust redirect as needed
    } catch (error) {
        console.error('Error saving review:', error);
        res.status(500).send('Internal Server Error'); // Changed to more descriptive message
    }
});

module.exports = router;
