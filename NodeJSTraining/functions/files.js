var fs = require('fs');

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf-8');//this will download the file and read it not stream it
console.log(greet);

console.log("Start");
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf-8', function (err, data) {//error first pattern
    console.log(data);
})
console.log("Finish");



