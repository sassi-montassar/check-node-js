


var http = require('http');
var fullString = '';
http.get(process.argv[2], function callback(response) {

    response.on('data', function(data) {
        fullString += data.toString();
    });
    response.on('end', function() {
        console.log(fullString);
        fullString = '';
        http.get(process.argv[3], function callback(response) {
            response.on('data', function(data) {
                fullString += data.toString();
            });
            response.on('end', function() {
                console.log(fullString);
                fullString = '';
                http.get(process.argv[4], function callback(response) {
                    response.on('data', function(data) {
                        fullString += data.toString();
                    });
                    response.on('end', function() {
                        console.log(fullString);
                    });
                });
            });
        });
    });
});
