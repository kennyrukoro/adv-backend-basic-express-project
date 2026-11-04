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
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'kel' },
    { id: 2, name: 'ken' },
    { id: 3, name: 'kex' }
  ];

  res.json(users);
});
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});