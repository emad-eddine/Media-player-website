import express from 'express';
import 'dotenv/config';
const app = express();

// firebase

import starCountRef from './src/db/db.js';
import { getDatabase, ref, onValue } from 'firebase/database';

app.use(express.json());

app.get('/api/v1/data', (req, res) => {
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      return res.status(200).json({ data });
    }
    res.status(500).json({ msg: 'server error' });
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
