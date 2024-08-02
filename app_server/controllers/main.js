/* GET homepage */
const index = (req, res) => {
    res.render('index', { title: 'Pharmacy Management System' });
   };
module.exports = {
index
};