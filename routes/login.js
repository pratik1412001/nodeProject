const express = require('express');
const router = express.Router();

// GET login page
router.get('/', (req, res) => {
  res.render('login');
});

// POST login
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (email === 'admin' && password === '123') {
    res.redirect('/index');
  } else {
    res.send('Invalid credentials. <a href="/">Try again</a>');
  }
});

// GET homepage after login
router.get('/index', (req, res) => {
  res.render('index', { title: 'HomePage' });
});

module.exports = router;
