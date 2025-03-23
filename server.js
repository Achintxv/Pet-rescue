const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/donate', async (req, res) => {
  const { name, email, amount } = req.body;

  if (!name || !email || !amount) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const newDonation = await db.query(
      'INSERT INTO donations (name, email, amount) VALUES ($1, $2, $3) RETURNING *',
      [name, email, amount]
    );

    res.json({ message: 'Thank you for your donation!', donation: newDonation.rows[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
