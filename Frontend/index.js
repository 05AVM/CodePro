const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 4000; // Choose a port for your backend server

app.use(bodyParser.json());

// Define a route to handle the POST request from your React frontend
app.post('/compile', async (req, res) => {
  try {
    const { code, language, input } = req.body;

    // Make a POST request to the external code compilation API
    const response = await axios.post('https://api.codex.jaagrav.in', {
      code,
      language,
      input,
    });

    // Send the response from the external API to your React frontend
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during code execution.' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
