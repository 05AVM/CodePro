const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors=require('cors');
const qs=require('qs');
//CORS (Cross-Origin Resource Sharing) is a security feature implemented by web browsers that restricts web pages from making requests to a different domain (origin) than the one that served the web page. This restriction is in place to prevent potential security vulnerabilities, such as cross-site request forgery (CSRF) and data theft.

const app = express();
const port = 4000; // Choose a port for your backend server
app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend's origin
  methods: 'POST', // Allow only POST requests from the frontend
}));
app.use(bodyParser.json());

// Define a route to handle the POST request from your React frontend
app.post('/compile',(req, res) => {
  const { code , language, input } = req.body;

  var data = qs.stringify({
    'code': code,
    'language': language,
    'input': input
  })
  var config = {
      method: 'post',
      url: 'https://api.codex.jaagrav.in',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
  };

  axios(config)
  .then((response)=>{
    res.send(response.data);
  })
  .catch((err)=>{
    res.status(500).json({ error : err.message });
  });
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

