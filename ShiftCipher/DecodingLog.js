var fs = require('fs')

module.exports = function() { 
    this.decodingLog = function(message){
        fs.appendFile('Decodinglog.txt', message +"\n", function (err) {
            if (err) {
                console.log("ERROR writing to Encoding Log!")
            }
        })
    }
};