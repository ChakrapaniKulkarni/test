var Emitter = require('./emitter');
var emtr = new Emitter;

emtr.on('greet', function () {
    console.log('I got you');
});

emtr.on('greet', function () {
    console.log('I got you again!!');
});

emtr.emit('greet');