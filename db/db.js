const pg       = require('pg-promise')({});

const pgConfig = {  host: process.env.PG_HOST,
                    port: process.env.PG_PORT,
                    database: 'newsletter_generator',
                    user:process.env.PG_USER,
                    password: process.env.PG_PASSWORD };

const db       = pg(pgConfig);


// newsletters, colors, articles db functions



// ARTICLES
function getAllArticles(req,res,next) {
  db.any(`SELECT * FROM articles`)
    .then( data => {
      res.rows = data;
      next();
    })
    .catch( error => {
      console.log('Error ',error);
    });
}

function getArticle(req,res,next) {
  db.one(`SELECT *
          FROM articles
          WHERE article_id=$1`,[req.params.id])
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error => {
      console.log('Error ', error);
    })
}

function addArticle(req,res,next) {
  db.none(`INSERT INTO articles 
           (title, description, article_url, icon_url, category_tag, newsletter_id, color_id)
           VALUES 
           ($1, $2, $3, $4, $5, $6, $7);`,
          [req.body.title, req.body.description, req.body.article_url, req.body.icon_url, req.body.category_tag, newsletter_id, color_id])
    .then( data => {
      console.log('Successfully added new entry');
      next();
    })
    .catch( error => {
      console.log('Error ', error);
    });
}

// (title, description, article_url, icon_url, category_tag, newsletter_id, color_id)

function updateArticle(req,res,next) {
  let queryString = '';
  if(req.body.title !== '') queryString += 'title = $1';
  if(req.body.description !== ''){
    if(queryString !== '') queryString += ','
    queryString += 'description=$2';
  }
  if(req.body.article_url !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'article_url=$3';
  }
  if(req.body.icon_url !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'icon_url=$4';
  }
  if(req.body.category_tag !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'category_tag=$5';
  }
  if(req.body.newsletter_id !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'newsletter_id=$6';
  }
  if(req.body.color_id !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'color_id=$7';
  }
  db.any(`UPDATE articles SET
          ${queryString}
          WHERE article_id=$8;`,
          [req.body.title,
          req.body.description,
          req.body.article_url,
          req.body.icon_url,
          req.body.category_tag,
          req.body.newsletter_id,
          req.body.color_id,
          req.params.id])
    .then( data => {
      console.log('Update successful!');
      next();
    })
    .catch( error => {
      console.log('Error ',error);
    });
}

function deleteArticle(req,res,next) {
  db.any(`DELETE FROM articles
          WHERE article_id=$1;`, [req.params.id])
    .then( data => {
      console.log('Successfully deleted article');
      next();
    })
    .catch( error => {
      console.log('Error ', error);
    });
}








// COLORS
function getAllColors(req,res,next) {
  db.any(`SELECT * FROM colors`)
    .then( data => {
      res.rows = data;
      next();
    })
    .catch( error => {
      console.log('Error ',error);
    });
}

function getColor(req,res,next) {
  db.one(`SELECT *
          FROM colors
          WHERE color_id=$1`,[req.params.id])
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error => {
      console.log('Error ', error);
    })
}

function addColor(req,res,next) {
  db.none(`INSERT INTO colors 
           (color_name, hex_code)
           VALUES 
           ($1, $2);`,
          [req.body.color_name, req.body.hex_code])
    .then( data => {
      console.log('Successfully added new entry');
      next();
    })
    .catch( error => {
      console.log('Error ', error);
    });
}

// (color_name, hex_code)

function updateColor(req,res,next) {
  let queryString = '';
  if(req.body.color_name !== '') queryString += 'color_name = $1';
  if(req.body.hex_code !== ''){
    if(queryString !== '') queryString += ','
    queryString += 'hex_code=$2';
  }
  db.any(`UPDATE colors SET
          ${queryString}
          WHERE color_id=$3;`,
          [req.body.color_name,
          req.body.hex_code,
          req.params.id])
    .then( data => {
      console.log('Update successful!');
      next();
    })
    .catch( error => {
      console.log('Error ',error);
    });
}

function deleteColor(req,res,next) {
  db.any(`DELETE FROM colors
          WHERE color_id=$1;`, [req.params.id])
    .then( data => {
      console.log('Successfully deleted color');
      next();
    })
    .catch( error => {
      console.log('Error ', error);
    });
}








// NEWSLETTERS
function getAllNewsletters(req,res,next) {
  db.any(`SELECT * FROM newsletters`)
    .then( data => {
      res.rows = data;
      next();
    })
    .catch( error => {
      console.log('Error ',error);
    });
}

// function getNewsletter(req,res,next) {
//   db.one(`SELECT *
//           FROM newsletters
//           WHERE newsletter_id=$1`,[req.params.id])
//     .then(data => {
//       res.rows = data;
//       next();
//     })
//     .catch( error => {
//       console.log('Error ', error);
//     })
// }


// CUSTOM QUERY TO GET ALL ARTICLES IN GIVEN NEWSLETTER
function getNewsletterArticles(req,res,next) {
  db.any(`SELECT *  
    FROM newsletters 
    JOIN articles 
    ON newsletters.newsletter_id = articles.newsletter_id  
    JOIN colors
    ON colors.color_id = articles.color_id
    WHERE newsletters.newsletter_id=$1`,[req.params.id])
    .then(data => {
      res.rows = data;
      next();
    })
    .catch( error => {
      console.log('Error ', error);
    })
}


function addNewsletter(req,res,next) {
  db.none(`INSERT INTO newsletters 
           (name, month, day, year, num_of_articles, litmus_code)
           VALUES 
           ($1, $2, $3, $4, $5, $6);`,
          [req.body.name, req.body.month, req.body.day, req.body.year, req.body.num_of_articles, req.body.litmus_code])
    .then( data => {
      console.log('Successfully added new entry');
      next();
    })
    .catch( error => {
      console.log('Error ', error);
    });
}

// (name, month, day, year, num_of_articles, litmus_code)

function updateNewsletter(req,res,next) {
  let queryString = '';
  if(req.body.name !== '') queryString += 'name = $1';
  if(req.body.month !== ''){
    if(queryString !== '') queryString += ','
    queryString += 'month=$2';
  }
  if(req.body.day !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'day=$3';
  }
  if(req.body.year !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'year=$4';
  }
  if(req.body.num_of_articles !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'num_of_articles=$5';
  }
  if(req.body.litmus_code !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'litmus_code=$6';
  }
  db.any(`UPDATE newsletters SET
          ${queryString}
          WHERE newsletter_id=$7;`,
          [req.body.name,
          req.body.month,
          req.body.day,
          req.body.year,
          req.body.num_of_articles,
          req.body.litmus_code,
          req.params.id])
    .then( data => {
      console.log('Update successful!');
      next();
    })
    .catch( error => {
      console.log('Error ',error);
    });
}

function deleteNewsletter(req,res,next) {
  db.any(`DELETE FROM newsletters
          WHERE newsletter_id=$1;`, [req.params.id])
    .then( data => {
      console.log('Successfully deleted newsletter');
      next();
    })
    .catch( error => {
      console.log('Error ', error);
    });
}

// USERS
// function getAllUsers(req,res,next) {
//   db.any(`SELECT * FROM users`)
//     .then( data => {
//       res.rows = data;
//       next();
//     })
//     .catch( error => {
//       console.log('Error ',error);
//     });
// }

// function getUser(req,res,next) {
//   db.one(`SELECT *
//           FROM users
//           WHERE user_id=$1`,[req.params.id])
//     .then(data => {
//       res.rows = data;
//       next();
//     })
//     .catch( error => {
//       console.log('Error ', error);
//     })
// }

// function addUser(req,res,next) {
//   db.none(`INSERT INTO users 
//            (first_name, last_name, age)
//            VALUES 
//            ($1, $2, $3);`,
//           [req.body.first_name, req.body.last_name, req.body.age])
//     .then( data => {
//       console.log('Successfully added new entry');
//       next();
//     })
//     .catch( error => {
//       console.log('Error ', error);
//     });
// }

// function updateUser(req,res,next) {
//   let queryString = '';
//   if(req.body.first_name !== '') queryString += 'first_name = $1';
//   if(req.body.last_name !== ''){
//     if(queryString !== '') queryString += ','
//     queryString += 'last_name=$2';
//   }
//   if(req.body.age !== '') {
//     if(queryString !== '') queryString += ','
//     queryString += 'age=$3';
//   }
//   db.any(`UPDATE users SET
//           ${queryString}
//           WHERE user_id=$4;`,
//           [req.body.first_name,req.body.last_name,req.body.age,req.params.id])
//     .then( data => {
//       console.log('Update successful!');
//       next();
//     })
//     .catch( error => {
//       console.log('Error ',error);
//     });
// }

// function deleteUser(req,res,next) {
//   db.any(`DELETE FROM users
//           WHERE user_id=$1;`, [req.params.id])
//     .then( data => {
//       console.log('Successfully deleted user');
//       next();
//     })
//     .catch( error => {
//       console.log('Error ', error);
//     });
// }

// newsletters, colors, articles

module.exports = { getAllNewsletters, getNewsletterArticles, addNewsletter, updateNewsletter, deleteNewsletter, getAllColors, getColor, addColor, updateColor, deleteColor, getAllArticles, getArticle, addArticle, updateArticle, deleteArticle };
