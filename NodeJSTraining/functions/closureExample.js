function addVar(a){
    var a=a;
    var c=10;
    return function(b){
        return (a+b);
    }
}

var initialise=addVar(10);
console.log(initialise(20));