const express = require('express');
const path = require('path');
const port = 5000;
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// View engine setup
app.set('views', path.resolve('./views'));
app.set('view engine', 'ejs');

// Routes
const authRoutes = require('./routes/login');
app.use('/', authRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
