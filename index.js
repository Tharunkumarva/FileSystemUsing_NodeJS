// Import necessary modules
const express = require('express');
const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

// Create an instance of Express
const app = express();

// Set the port for the server to listen on
const port = 3000;

// Define the folder path where text files will be stored
const folderPath = path.join(__dirname, 'textFiles');

// Check if the folder exists, and create it if not
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

 // Endpoint to create a new text file




app.post('/createFile', (req, res) => {
  // Generate a timestamp for the file name
  const timestamp = new Date().toISOString().replace(/[-:]/g, '');

  // Create the file name by appending ".txt" to the timestamp
  const formattedFileName = dayjs().format("DD MMM YYYY - HH mm ss");

  // Create the full file path by joining the folder path and file name
  const filePath = path.join(folderPath, formattedFileName + '.txt');

  // Write the timestamp to the file
  fs.writeFile(filePath, timestamp, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error creating file');
    }

    // Respond with a success message and the name of the created file
    res.status(201).send(`File created: ${formattedFileName}`);
  });
});

// Endpoint to get a list of all text files
app.get('/getAllFiles', (req, res) => {
  // Read the list of files in the textFiles folder
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error reading files');
    }

    // Respond with the list of files in JSON format
    res.json({ files });
  });
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
