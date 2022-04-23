const express = require('express');
const cloudinary = require('cloudinary').v2;
const bodyParser = require('body-parser');
const connectDB = require('./database/db');
const path = require('path');
require('dotenv').config({ path: '.env' });

// Connect to Cloudinary repository
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//initialize express app
const app = express();

//Connect to DB
connectDB();

//Setting up middleware
app.use(express.json({ extended: false })); //needed to get data in req.body
app.use(bodyParser.urlencoded({ extended: true }));

//Define Routes
//Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/ingredients', require('./routes/ingredients'));
app.use('/api/recipes', require('./routes/recipes'));

//Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
//Use port 5000 for server
const PORT = process.env.PORT || 5000;

//listen on port
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
