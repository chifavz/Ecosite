// Your server-side code (e.g., Node.js with Express)
const express = require('express');
const path = require('path');

const app = express();

// Serve images from the 'images' directory
app.use('/products', express.static(path.join(__dirname, 'products')));

// Other server configurations...

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
