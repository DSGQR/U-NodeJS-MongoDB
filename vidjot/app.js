const express = require('express');

const app = express();

// Index Route
app.get('/', (req, res) => {
  console.log(req.name)
  res.send('INDEX')
})

// About Route
app.get('/about', (req, res) => {
 res.send('ABOUT')
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port http://localhost:${PORT}`);
});