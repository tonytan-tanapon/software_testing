const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors()); // ✅ Enable CORS for all origins
app.use(express.static(__dirname));
app.use(express.json());

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    res.json({ message: 'Login successful' });
  } else {
    res.json({ message: 'Invalid credentials' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
