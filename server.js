// DEPENDENCIES
const express = require('express');
const app = express();
const res = require('express/lib/response');
const mongoose = require('mongoose');
const morgan = require('morgan');
require('dotenv').config();
const methodOverride = require('method-override');
const controller = (require('./controllers/todos'));


// database connection,
mongoose.connect(process.env.URL, {
useNewUrlParser: true,
useUnifiedTopology: true
});

// DATABASE CONNECTION
const db = mongoose.connection
// connection error callback functions
db.on('error', (err) => console.log(err.message + ' is mongo not running?'));
db.on('connected', () => console.log('mongo is connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

// MIDDLEWARE
app.use(morgan('dev'));
app.use(express.urlencoded ({ extended: true }));
app.use(methodOverride('_method'));

// CONTROLLER
app.use('/todo', controller);

// LISTENER
const PORT = process.env.PORT | 3000;
app.listen(PORT, ()=>console.log(`Listening on port ${PORT}`));