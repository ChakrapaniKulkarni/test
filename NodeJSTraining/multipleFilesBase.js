var greet = require('./greet');
//console.log(greet.en);
//greet.en();
//greet.es();
// greet['en']();
// greet['es']();

var GreetConfig = require('./greet/config').GREET;
greet[GreetConfig.EN]();
greet[GreetConfig.ES]();