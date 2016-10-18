const pg       = require('pg-promise')({});
const pry      = require('pryjs');

const pgConfig = {  host: process.env.PG_HOST,
                    port: process.env.PG_PORT,
                    database: 'newsletter_generator',
                    user:process.env.PG_USER,
                    password: process.env.PG_PASSWORD };

const db       = pg(pgConfig);


// newsletters and articles db functions



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
           (article_type, title, description, article_url, icon_url, category_tag, newsletter_id, color_id, cta, event_date, event_time, position)
           VALUES 
           ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12);`,
          [req.body.article_type, req.body.title, req.body.description, req.body.article_url, req.body.icon_url, req.body.category_tag, req.body.newsletter_id, req.body.color_id, req.body.cta, req.body.event_date, req.body.event_time, req.body.position])
    .then( data => {
      console.log('Successfully added new entry');
      next();
    })
    .catch( error => {
      console.log('Error ', error);
    });
}

// (article_type, title, description, article_url, icon_url, category_tag, newsletter_id, color_id, cta, event_date, event_time, position)

function updateArticle(req,res,next) {
  let queryString = '';
  if(req.body.article_type !== '') queryString += 'article_type = $1';
  if(req.body.title !== ''){
    if(queryString !== '') queryString += ','
    queryString += 'title=$2';
  }
  if(req.body.description !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'description=$3';
  }
  if(req.body.article_url !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'article_url=$4';
  }
  if(req.body.icon_url !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'icon_url=$5';
  }
  if(req.body.category_tag !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'category_tag=$6';
  }
  if(req.body.newsletter_id !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'newsletter_id=$7';
  }
  if(req.body.color_id !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'color_id=$8';
  }
  if(req.body.cta !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'cta=$9';
  }
  if(req.body.event_date !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'event_date=$10';
  }
  if(req.body.event_time !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'event_time=$11';
  }
  if(req.body.position !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'position=$12';
  }
  db.any(`UPDATE articles SET
          ${queryString}
          WHERE article_id=$13;`,
          [req.body.article_type, 
          req.body.title, 
          req.body.description, 
          req.body.article_url, 
          req.body.icon_url, 
          req.body.category_tag, 
          req.body.newsletter_id, 
          req.body.color_id, 
          req.body.cta, 
          req.body.event_date, 
          req.body.event_time,
          req.body.position, req.params.id])
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

function getNewsletter(req,res,next) {
  db.task(task=> {
    return task.batch([
      task.one(`SELECT *
        FROM newsletters
        WHERE newsletter_id=$1`, [req.params.id]),
      task.any(`SELECT *  
        FROM newsletters 
        JOIN articles 
        ON newsletters.newsletter_id = articles.newsletter_id  
        JOIN colors
        ON colors.color_id = articles.color_id
        JOIN article_types
        ON article_types.article_type_id = articles.article_type
        WHERE newsletters.newsletter_id=$1 `, [req.params.id])
    ]);
  })
    .then(data => {
      console.log("get newsletter details")
      res.newsletter_details = data[0];
      res.articles = data[1];
      next();
    })
    .catch( error => {
      console.log('Error ', error);
    })
}


// CUSTOM QUERY TO GET ALL ARTICLES IN GIVEN NEWSLETTER
function getNewsletterDetails(req,res,next) {
  db.task(task=> {
    return task.batch([
      task.one(`SELECT *
        FROM newsletters
        WHERE newsletter_id=$1`, [req.params.id]),
      task.any(`SELECT *  
        FROM newsletters 
        JOIN articles 
        ON newsletters.newsletter_id = articles.newsletter_id  
        JOIN colors
        ON colors.color_id = articles.color_id
        JOIN article_types
        ON article_types.article_type_id = articles.article_type
        WHERE newsletters.newsletter_id=$1 
        AND articles.article_type=1;`, [req.params.id]),
      task.any(`SELECT *  
        FROM newsletters 
        JOIN articles 
        ON newsletters.newsletter_id = articles.newsletter_id  
        JOIN colors
        ON colors.color_id = articles.color_id
        JOIN article_types
        ON article_types.article_type_id = articles.article_type
        WHERE newsletters.newsletter_id=$1 
        AND articles.article_type=2;`, [req.params.id]),
      task.any(`SELECT *  
        FROM newsletters 
        JOIN articles 
        ON newsletters.newsletter_id = articles.newsletter_id  
        JOIN colors
        ON colors.color_id = articles.color_id
        JOIN article_types
        ON article_types.article_type_id = articles.article_type
        WHERE newsletters.newsletter_id=$1 
        AND articles.article_type=3;`, [req.params.id])
    ]);
  })
  .then(data=> {
    res.details = data[0];
    res.lead_article = data[1];
    res.non_lead_articles = data[2];
    res.event = data[3];
    next();
  })
  .catch(error=> {
      console.log('Error ', error);
  });

    // newsletter_details: res.details,........one
    // lead_articles: res.lead_articles,.........any
    // non_lead_articles: res.non_lead_articles,......any
    // event: res.event.......one

}










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
  db.task(task=> {
    return task.batch([
      task.none(`INSERT INTO newsletters 
           (name, month, day, year, litmus_code)
           VALUES 
           ($1, $2, $3, $4, $5);`,
          [req.body.name, req.body.month, req.body.day, req.body.year, req.body.litmus_code]),
      task.any(`SELECT * 
        FROM newsletters`, [req.params.id])
    ]);
  })
    .then( data => {
      // eval(pry.it)
      res.newsletters = data[1];
      console.log(data[1]);
      console.log('Successfully added new entry');
      next();
    })
    .catch( error => {
      console.log('Error ', error);
    });
}







// (name, month, day, year, litmus_code)

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
  if(req.body.litmus_code !== '') {
    if(queryString !== '') queryString += ','
    queryString += 'litmus_code=$5';
  }
  db.any(`UPDATE newsletters SET
          ${queryString}
          WHERE newsletter_id=$6;`,
          [req.body.name,
          req.body.month,
          req.body.day,
          req.body.year,
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
  db.task(task=> {
    return task.batch([
      task.any(`DELETE FROM articles
          WHERE newsletter_id=$1;`,
          [req.params.id]),
      task.any(`DELETE FROM newsletters
          WHERE newsletter_id=$1;`, [req.params.id])
    ]);
  })
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

module.exports = { getAllNewsletters, getNewsletter, getNewsletterDetails, addNewsletter, updateNewsletter, deleteNewsletter, getAllColors, getColor, addColor, updateColor, deleteColor, getAllArticles, getArticle, addArticle, updateArticle, deleteArticle };
