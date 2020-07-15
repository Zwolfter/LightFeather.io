const express = require('express');
const fs = require('fs');
const app = express();
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  });
app.get('/', function(req, res){
    responseFile(res, "./index.html")
});
app.get('/index.html', function(req, res){
    responseFile(res, "./index.html")
});
app.post('/Registration.html', function(req, res){
    responseFile(res, "./Registration.html")
});
function responseFile(res, file){
    fs.readFile(file, function (err, html) {
        if (err) {
            throw err; 
        }        
            res.writeHeader(200, {"Content-Type": "text/html"});  
            res.write(html);  
            res.end();
    });
}
app.listen("80");