var fs = require('fs');
var zlib = require('zlib');
var readable = fs.createReadStream(__dirname + '/greet.txt',
    { encoding: 'utf-8', highWaterMark: 0.5 * 1024 });

var writable = fs.createWriteStream(__dirname + '/greetCopy.txt');

readable.on('error', function (err) {
    console.log(err);
});

readable.pipe(writable);

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz')
var gzip = zlib.createGzip();
//Pipes example

readable.pipe(gzip).pipe(compressed);

