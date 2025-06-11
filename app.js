const express = require('express');
const path = require('path');
const { title } = require('process');
const port = 5000;
const app = express();


app.use(express.static('public'));
app.set('views', path.resolve('./views'));
app.set('view engine', 'ejs');



app.get('/', (req, res) => {
  res.render('index',{title:'HomePage'});
  // res.send('hello worid')
});


app.listen(port, () => {
  console.log(`server start on ${port} number`);
});
