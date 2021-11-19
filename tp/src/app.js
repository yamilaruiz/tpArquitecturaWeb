const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

// connection to db
const app = express();
app.use(express.json());
mongoose.connect('mongodb+srv://usrMongoDb:usrMongoDb@cluster0.psqeu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(() => {
        console.log('Se conectó a mongodb')
})
.catch((error) => {
        console.log('No se conectó a mongodb')
        console.log(console.error())
})

// importing routes
const indexRoutes = require('./routes/index');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
