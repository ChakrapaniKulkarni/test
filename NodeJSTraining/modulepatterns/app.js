var greet01 = require('./greet1');
greet01();

// var greet02 = require('./greet2');
// console.log(greet02);

var greet02 = require('./greet2').greet;
greet02();

var greet03 = require('./greet3');
//greet03();//error
greet03.greeting = "this is from me!";
greet03.greet();

var greet03b = require('./greet3');
greet03b.greet();

var greet4 = require('./greet4');
var greet04_01 = new greet4('Chakrapani');
greet04_01.greet();

var greet5 = require('./greet5');
console.log(greet5);
greet5.greeting = 'hey';
console.log(greet5.greeting);
greet5.greet();

var greet_exprt = require('./greet').greet;
greet_exprt();