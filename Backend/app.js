const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const routera = require("./routes/author-routes");
const routerr = require("./routes/review-routes");
const cors = require("cors");
const app = express();
const mysql = require('mysql');

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); 
app.use("/author", routera); 
app.use("/reviews", routerr); 


const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root@localhost',
  password: 'Gowthuanju@28',
  database: 'Project'
});

app.post('/books', (req, res) => {
  console.log('Received POST request to /books'); // Log to check if request reaches this point

  const { name, author, description, price, image, available } = req.body;

  if (!name || !author || !description || !price || !image || available === undefined) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'INSERT INTO books (name, author, description, price, image, available) VALUES (?, ?, ?, ?, ?, ?)';
  
  connection.query(query, [name, author, description, price, image, available], (error, results) => {
    if (error) {
      console.error('Error adding book to database:', error);
      return res.status(500).json({ error: 'Failed to add book', errorMessage: error.message });
    }
    console.log('Book added successfully:', results);
    return res.status(200).json({ message: 'Book added successfully' });
  });
});



app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

mongoose.connect(
    "mongodb://localhost:27017/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database and mysql"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
