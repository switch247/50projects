const express = require('express');
const fs = require('fs');
const path = require('path');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// Serve static files from the "public" directory
app.use(express.static('public'));

router.get('/folders', (req, res) => {
  const directoryPath = path.join(__dirname, '../public'); // Adjust the path
  fs.readdir(directoryPath, { withFileTypes: true }, (err, files) => {
    if (err) {
      return res.status(500).send('Unable to scan directory: ' + err);
    }
    const folders = files
      .filter((file) => file.isDirectory()) // Filter only folders
      .map((folder) => folder.name);
    res.json(folders);
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use('/', router);

// Export the handler for Netlify
if (process.env.NODE_ENV === 'development') {
  // For local development, listen on a port
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(
      `Server running in development mode on http://localhost:${PORT}`
    );
  });
} else {
  app.use(`/.netlify/functions/server`, router);
  module.exports.handler = serverless(app);
}
