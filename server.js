const express = require('express');

const app = express();
app.use(express.json());
   app.use((req, res, next) => {
     console.log(`${req.method} ${req.url}`);
     next();
   });
const users = [
  { id: 1, name: 'kel' },
  { id: 2, name: 'ken' },
  { id: 3, name: 'kex' }
];

app.get('/', (req, res) => {
  res.send('welcome to my world');
});

app.get('/about', (req, res) => {
  res.send('my world will help you adjust to the new world');
});

app.get('/contact', (req, res) => {
  res.send('you can reach me at hello@example.com');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === Number(req.params.id));
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  res.json(user);
});

app.get('/search', (req, res) => {
  const name = req.query.name;
  if (!name) {
    return res.send('Please provide a name, for example /search?name=alice');
  }
  res.send(`You searched for: ${name}`);
});

app.post('/users', (req, res) => {
 const newUser = { ...req.body, id: users.length + 1 };
  users.push(newUser);
  res.status(201).json({ message: 'User received', user: newUser });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});