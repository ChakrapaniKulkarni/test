function Human(eyeColor, hairColor, name) {
    this.eyeColor = eyeColor;
    this.name = name;
    this.hairColor = hairColor;
    // this.breathe = function () {
    //     return "I am Breathing";
    // }
}
Human.prototype.breathe = function () {
    return "my name is " + this.name;
}
var Humans = [
    { name: 'ram', hairColor: 'black', eyeColor: 'black' },
    { name: 'ravi', hairColor: 'white', eyeColor: 'black' },
    { name: 'rakesh', hairColor: 'brown', eyeColor: 'black' }
];
var humanInstances = {}
function createHumans(humans) {
    for (var i = 0; humans[i]; i++) {
        var human = humans[i];
        humanInstances[human['name']] = new Human(human.eyeColor, human.hairColor, human.name)
    }
}
function retrieveHuman(name) {
    return ('name:' + humanInstances[name].name + ', hairColor ' + humanInstances[name].hairColor)
        + " " + humanInstances[name].breathe();
}
var name = "ram";
createHumans(Humans);
console.log(retrieveHuman(name));

function Athelete(eye, hair, name) {
    Human.call(this, eye, hair, name);
    this.speed = 50;
    this.sleep = function () {
        return "I am sleeping, don't disturb";
    }
}
Athelete.prototype = Object.create(Human.prototype);
Athelete.prototype.run = function () {
    console.log('I am running!');
}
var ronaldo = new Athelete('blck', 'brwn', 'Ronaldo');
//ronaldo.name = "Ronaldo";
ronaldo.run();
console.log(ronaldo.sleep());
console.log(ronaldo.breathe());
Human.prototype.job = function () {
    console.log('I work at Google!');
}
ronaldo.job();
console.log(ronaldo);
