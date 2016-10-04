const router          = require('express').Router();
const { 
	getAllNewsletters, getNewsletter, addNewsletter, updateNewsletter, deleteNewsletter,
	getAllColors, getColor, addColor, updateColor, deleteColor, 
	getAllArticles, getArticle, addArticle, updateArticle, deleteArticle 
	}  = require('../db/db');

// newsletters, colors, articles


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






// newsletter landing page
router.get('/', getAllNewsletters, (req,res) => {
  res.render('newsletter/index',{newsletters: res.rows});
});

// Post route to add new newsletter
router.post('/new', addNewsletter, (req,res) => {
  res.redirect('/newsletter');
});


// Show newsletter's profile
router.get('/:id', getNewsletter, (req,res) => {
  res.render('newsletter/show', {newsletter: res.rows});
});

// // Edit newsletter
router.put('/:id', updateNewsletter, (req,res) => {
  res.redirect('/newsletter/'+req.params.id);
});

// Delete newsletter
router.delete('/:id', deleteNewsletter, (req,res) => {
 res.redirect('/newsletter');
})


// // User landing page
// router.get('/', getAllUsers, (req,res) => {
//   res.render('user/index',{users: res.rows});
// });

// // Post route to add new user
// router.post('/new', addUser, (req,res) => {
//   res.redirect('/user');
// });


// // Show user's profile
// router.get('/:id', getUser, (req,res) => {
//   res.render('user/show', {user: res.rows});
// });

// // // Edit user
// router.put('/:id', updateUser, (req,res) => {
//   res.redirect('/user/'+req.params.id);
// });

// // Delete user
// router.delete('/:id', deleteUser, (req,res) => {
//  res.redirect('/user');
// })

module.exports = router;
