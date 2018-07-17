function printFn(name){
    console.log("Hi "+name+", how you doing");
}

function greetme(baseFn,name){
console.log(baseFn);
baseFn(name);
}

greetme(printFn,"Chakrapani");

var myGreeting=function(name){
    console.log("Oyee "+name+"!");
}

greetme(myGreeting,"Ckk");