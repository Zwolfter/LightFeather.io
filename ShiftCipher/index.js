const express = require('express');
require('./CShift.js')();
require('./DecodingLog.js')();
require('./EncodingLog.js')();

const app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({
    extended: true
}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });

app.post('/api/encode', function (req, res) {
    console.log(req.body.Shift);
    console.log(req.body.Message);
    var encodedMessage = caesarShift(req.body.Message, req.body.Shift);
    var encodeResponse = { EncodedMessage: encodedMessage };
    //save to encoded file.
    encodingLog(JSON.stringify(encodeResponse));
    res.status(200).json(encodeResponse);
})
app.post('/api/decode', function (req, res) {
    console.log(req.body.Shift);
    console.log(req.body.Message);
    
    var decodedMessage = caesarShift(req.body.Message, -Number(req.body.Shift));
    var decodeResponse = { DecodedMessage: decodedMessage };
    //save to encoded file.
    decodingLog(JSON.stringify(decodeResponse));
    res.status(200).json(decodeResponse);
})
  app.listen(23456)