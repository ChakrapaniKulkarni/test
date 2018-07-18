function callbackFn(fn, name) {
    console.log("Hey! How are you doing!!")
    fn(name);
}
callbackFn(function (name) {
    console.log(`Hello ${name}`)
}, 'Chakrapani');