
var moduleFile = require('./6_make_it_modular2');

moduleFile(process.argv[2], process.argv[3], function(err, data){
    data.forEach(function(file){
        console.log(file);
    });
});



