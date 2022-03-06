const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/folders', (req, res) => {
  const directoryPath = path.join(__dirname, 'public'); // Change if needed
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

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
