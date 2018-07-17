function greeter() {
    this.greeting = "hello!"
    this.greet = function () {
        //console.log('hello!!!');
        console.log(this.greeting);
    }

}
module.exports = new greeter;