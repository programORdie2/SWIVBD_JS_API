// ./src/index.js
// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const api = require("./api");

// defining the Express app
const app = express();

// adding Helmet to enhance your Rest API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));

// defining an endpoint to return all ads
app.get('/', (req, res) => {
    let user = req.query.user
    let max = req.query.max
    if (max === undefined) {res.send({'message':'Please use the max param!'}); return}
    if (user === undefined) {res.send({'message':'Please use the user param!'}); return}
    res.send(api.getSWIVBD(user, max));
});

// starting the server
app.listen(3001, () => {
  console.log('listening on port 3001');
});