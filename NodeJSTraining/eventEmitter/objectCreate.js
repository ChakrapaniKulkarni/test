var obj = {
    name: 'chakrapani',
    age: 20,
    city: 'Bangalore'
}
var ak = Object.create(obj);
ak.name = "CKK";
console.log(ak.age);