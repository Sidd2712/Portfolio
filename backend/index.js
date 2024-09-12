const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors(
  {
    origin: ["https://siddharthportfolio.vercel.app"],
    methods:["GET","POST"],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
  }
));
app.use(express.json());
app.get("/",(req,res)=>{
  res.json("Hello");
})

// Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.log(err));

mongoose.connect('mongodb+srv://siddharth2727goyal:fAz7PLXwOvdamUpC@cluster0.i8fcbmf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Start the server
app.listen(5000, () => {
  console.log(`Server is running on port: 5000`);
});

const Submission = require('./models/Submission');

// Example route for handling form submissions
app.post('/submit', async (req, res) => {
  try {
    const { firstName, lastName, email, phone, service, message } = req.body;
    

    const newSubmission = new Submission({
      firstName,
      lastName,
      email,
      phone,
      service,
      message
    });

    await newSubmission.save();

    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    res.status(400).json({ error: 'Failed to submit form' });
  }
});
