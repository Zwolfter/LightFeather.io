var fs = require('fs')

module.exports = function() { 
    this.encodingLog = function(message){
        fs.appendFile('Encodinglog.txt', message +"\n", function (err) {
            if (err) {
                console.log("ERROR writing to Encoding Log!")
            }
        })
    }
};
