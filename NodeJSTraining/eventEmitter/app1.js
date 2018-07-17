var Emitter = require('events');
var emtr = new Emitter;

emtr.on('greet', function () {
    console.log('I got you');
});

emtr.on('greet', function () {
    console.log('I got you again!!');
});
emtr.on('greet', function () {
    console.log('I got you again!!');
});
var newListener = function () {
    console.log('Adding new listener!!');
}
emtr.on('greet', newListener);
emtr.emit('greet');
emtr.removeListener('greet', newListener);
emtr.emit('greet');