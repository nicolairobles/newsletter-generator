const pry = require('pryjs');

const router          = require('express').Router();
const { 
	getAllNewsletters, getNewsletter, getNewsletterDetails, addNewsletter, updateNewsletter, deleteNewsletter
  }  = require('../db/db');


// Display all Newsletters
router.get('/', getAllNewsletters, (req,res) => {
  res.render('newsletter/index',{newsletters: res.rows});
});

// Post route to add new newsletter
router.post('/new', addNewsletter, (req,res) => {
  newsletters = res.newsletters;
  // console.log(newsletters)
  	// eval(pry.it)
  var length = newsletters.length;
  // length += 1;
  // console.log(res.rows);
  console.log("before redirect")
  res.redirect('/newsletter/'+length+'/edit');
});

// Show newsletter's profile
// router.get('/:id', getNewsletter, (req,res) => {
//   res.render('newsletter/show', {newsletter: res.rows});
// });

// Show newsletter's articles and details
router.get('/:id/newswire', getNewsletterDetails, (req,res) => {
  res.set({ 'content-type': 'application/json; charset=utf-8' })
  res.render('newsletter/newswire', {
  	newsletter_details: res.details,
  	lead_article: res.lead_article,
  	non_lead_articles: res.non_lead_articles,
  	event: res.event
  });
  console.log(res.non_lead_articles)
});

// Show newsletter's articles and details
router.get('/:id/newscenter', getNewsletterDetails, (req,res) => {
  res.render('newsletter/newscenter', {
    newsletter_details: res.details,
    lead_article: res.lead_article,
    non_lead_articles: res.non_lead_articles,
    event: res.event
  });
  // eval(pry.it)
});

// Page where you edit the newsletter
router.get('/:id/edit', getNewsletter, (req,res) => {
  console.log("in redirect request, before render")
  res.render('newsletter/edit', {
    newsletter: res.newsletter_details,
    articles: res.articles
  });
});

// Request with edited newsletter params
router.put('/:id', updateNewsletter, (req,res) => {
  res.redirect('/newsletter'+req.params.id);
});

// Delete newsletter
router.delete('/:id', deleteNewsletter, (req,res) => {
 res.redirect('/newsletter');
})



module.exports = router;
