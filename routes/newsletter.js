const pry = require('pryjs');

const router          = require('express').Router();
const { 
	getAllNewsletters, getNewsletterDetails, addNewsletter, updateNewsletter, deleteNewsletter
  }  = require('../db/db');


// newsletter landing page
router.get('/', getAllNewsletters, (req,res) => {
  res.render('newsletter/index',{newsletters: res.rows});
});

// Post route to add new newsletter
router.post('/new', addNewsletter, (req,res) => {
  res.redirect('/newsletter');
});

// Show newsletter's profile
// router.get('/:id', getNewsletter, (req,res) => {
//   res.render('newsletter/show', {newsletter: res.rows});
// });

// Show newsletter's articles and details
router.get('/:id', getNewsletterDetails, (req,res) => {
  res.render('newsletter/show', {
  	newsletter_details: res.details,
  	lead_article: res.lead_article,
  	non_lead_articles: res.non_lead_articles,
  	event: res.event
  });
});

// // Edit newsletter
router.put('/:id', updateNewsletter, (req,res) => {
  res.redirect('/newsletter/'+req.params.id);
});

// Delete newsletter
router.delete('/:id', deleteNewsletter, (req,res) => {
 res.redirect('/newsletter');
})



module.exports = router;