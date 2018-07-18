// var a = 10;
// {
//     a = 20;
//     console.log(a);
// }
// console.log(a);

// var d;
// console.log(d);//Hoisting
// d = 10;
// console.log(d);

// var c = 30;
// function scopeLimiter() {
//     var c = 50;
//     console.log(c);
// }
console.log(c);
//immediately invoked function expression IIFE;
var c = 30;
(function scopeLimiter() {
    var c = 50;
    console.log(c);
}());
console.log(c);
