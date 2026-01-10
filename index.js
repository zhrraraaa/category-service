require('dotenv').config();
const express = require('express');
const db = require('./src/config/database');
const categoryRoutes = require('./src/routes/category.route');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use('/api', categoryRoutes);

app.get('/', (req, res) => {
  res.send('Category Service Jalan');
});

db.connect((err) => {
  if (err) {
    console.error('DB connection failed:', err);
  } else {
    console.log('Database category connected');
  }
});

app.listen(PORT, () => {
  console.log(`Category Service running di port ${PORT}`);
});
