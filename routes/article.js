const router          = require('express').Router();
const { 
	getAllArticles, getArticle, addArticle, updateArticle, deleteArticle 
	}  = require('../db/db');


// article landing page
router.get('/', getAllArticles, (req,res) => {
  res.render('article/index',{articles: res.rows});
});

// Post route to add new article
router.post('/new', addArticle, (req,res) => {
  res.redirect('/article');
});


// Show article's profile
router.get('/:id', getArticle, (req,res) => {
  res.render('article/show', {article: res.rows});
});

// // Edit article
router.put('/:id', updateArticle, (req,res) => {
  res.redirect('/article/'+req.params.id);
});

// Delete article
router.delete('/:id', deleteArticle, (req,res) => {
 res.redirect('/article');
})



module.exports = router;
