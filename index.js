const express = require('express');
const app = express();


// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, Express! ketan 123');
});  
  
// Start server     
const PORT = 5000;
const HOST = 127.;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
