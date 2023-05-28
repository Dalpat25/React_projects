const express = require('express');
const fs = require('fs');

const app = express();

// Define an API endpoint to handle the append message request
app.post('/api/append-message', (req, res) => {
  const { message } = req.body;

  // Prepare the data for CSV format
  const csvData = `${message.text},${message.name},Ankit,${getDate(message.timestamp)},${getTime(message.timestamp)}\n`;

  // Append the CSV data to the "Ankit.csv" file
  fs.appendFile('Ankit.csv', csvData, (err) => {
    if (err) {
      console.error('Error appending to Ankit.csv:', err);
      res.status(500).json({ error: 'Failed to append message' });
    } else {
      console.log('Message appended to Ankit.csv');
      res.status(200).json({ message: 'Message appended successfully' });
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
