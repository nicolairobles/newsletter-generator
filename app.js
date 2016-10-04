const express        = require('express');
const logger         = require('morgan');
const path           = require('path');
const pry 			 = require('pryjs');
const methodOverride = require('method-override');
const bodyParser     = require('body-parser');
const newsletterRoute      = require('./routes/newsletter');
const colorRoute      = require('./routes/color');
const articleRoute      = require('./routes/article');
// const userRoute      = require('./routes/user');
const homeRoute      = require('./routes/home');
const app            = express();
const port           = process.env.PORT || 3000;

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(methodOverride('_method'));

app.use('/', homeRoute);
app.use('/newsletter', newsletterRoute);
app.use('/color', colorRoute);
app.use('/article', articleRoute);
// app.use('/user', userRoute);

app.listen(port, () => {
  console.log('Server is listening on port ', port);
})