const express = require('express');
const bodyParser = require('body-parser');

// Instantiate express object and body-parser middleware
const app = express();
const jsonParser = bodyParser.json();

// Instantiate empty array of objects for new messages
let messages = [];

// Use body-parser as middleware to parse JSON string request into JSON object for handling
// Push message into empty messages array
app.post('/createmessage', jsonParser, (req, res) => {
    let obj = {};
    obj['name'] = req.body.name;
    obj['message'] = req.body.message;
    messages.push(obj);
    res.send('Success! Hopefully you\'re a well like individual, otherwise, get ready for the Twitter onslaught.');
})

// GET request to send current messages to client
app.get('/getmessages', (req, res) => {
    messages.forEach((message) => {
        res.send(message);
    })
})

app.listen(3000, () => {
    console.log('Social Server started...');
})