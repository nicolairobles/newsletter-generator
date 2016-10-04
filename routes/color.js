const router          = require('express').Router();
const { 
	getAllColors, getColor, addColor, updateColor, deleteColor
	}  = require('../db/db');



// color landing page
router.get('/', getAllColors, (req,res) => {
  res.render('color/index',{colors: res.rows});
});

// Post route to add new color
router.post('/new', addColor, (req,res) => {
  res.redirect('/color');
});


// Show color's profile
router.get('/:id', getColor, (req,res) => {
  res.render('color/show', {color: res.rows});
});

// // Edit color
router.put('/:id', updateColor, (req,res) => {
  res.redirect('/color/'+req.params.id);
});

// Delete color
router.delete('/:id', deleteColor, (req,res) => {
 res.redirect('/color');
})



module.exports = router;
