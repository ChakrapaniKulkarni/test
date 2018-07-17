// function greet() {
//     console.log("Hello Chakrapani !")
// }

// module.exports = greet;

//var en = require('./en.js');
//var es = require('./es.js');
function en() {
    console.log("Hello Chakrapani !")
}
function es() {
    console.log("Hola Chakrapani !")
}
module.exports = {
    en: en,
    es: es
}