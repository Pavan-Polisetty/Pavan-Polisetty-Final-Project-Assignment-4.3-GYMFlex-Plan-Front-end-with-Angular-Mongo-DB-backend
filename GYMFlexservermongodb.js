
/* After installing the express, bodyparser, cors, and mongoose packages, 
we give the following instructions to create a restful API and connect
it to the cricket Mongo DB file, we created in the earlier unit*/ 

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost/HardrockGYM', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB database');
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB database', error);
  });

// Define routes
app.get('/HardrockGYMapi', (req, res) => {
  res.send('Welcome to my API!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
