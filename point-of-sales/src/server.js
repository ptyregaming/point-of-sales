// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configure MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'pos_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Endpoint to handle transactions
app.post('/api/transaction', (req, res) => {
  const { item, quantity } = req.body;
  const query = 'INSERT INTO transactions (item, quantity) VALUES (?, ?)';

  db.query(query, [item, quantity], (err, result) => {
    if (err) {
      console.error('Transaction error:', err);
      res.status(500).send({ message: 'Transaction failed' });
    } else {
      res.send({ message: 'Transaction recorded successfully' });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
