var fs = require('fs');
var readable = fs.createReadStream(__dirname + '/greet.txt',
    { encoding: 'utf-8', highWaterMark: 0.5 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetCopy.txt');

readable.on('error', function (err) {
    console.log(err);
});

readable.on('data', function (chunk) {
    console.log(chunk);
    console.log("-----Read------");
    writable.write(chunk);
    console.log("-----Wrote------");
});



