const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('welcome to my world ');   
});
app.get('/about', (req, res) => {
  res.send('my world will help you adjust to the new world');
});

app.get('/contact', (req, res) => {
  res.send('you can reach me at hello@example.com');
});
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});