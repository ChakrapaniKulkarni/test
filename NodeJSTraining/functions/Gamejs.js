function Character(energy, stamina, power) {
this.energy = energy;
this.stamina = stamina;
this.power = power;
}
Character.prototype.run = function () {
this.stamina = this.stamina - 5;
}
Character.prototype.deplete = function () {
this.energy = this.energy - 5;
}
Character.prototype.gain = function () {
this.energy = this.energy + 5;
}

function Hero(special, energy, stamina, power) {
Character.call(this, energy, stamina, power);
this.special = special;
}
Hero.prototype = Object.create(Character.prototype);
Hero.prototype.drink = function () {
this.stamina = this.stamina + 5;
}
var hulk = new Hero("Bulky Green mammoth", 80, 80, 80);
hulk.drink();
console.log(hulk);
var ironMan = new Hero("Hitech suit", 70, 80, 60);
var antMan = new Hero("Shrink", 80, 50, 40);