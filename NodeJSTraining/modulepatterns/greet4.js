function greeter(name) {
    this.name = name;
    this.greeting = "hello! " + this.name;
    this.greet = function () {
        //console.log('hello!!!');
        console.log(this.greeting);
    }

}
module.exports = greeter;