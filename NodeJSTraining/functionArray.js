var arr = [];
arr.push(function () {
    console.log('1');
});
arr.push(function () {
    console.log('2');
});
arr.push(function () {
    console.log('3');
});
arr.push(function () {
    console.log('4');
});
// for (var i = 0; arr[i]; i++) {
//     arr[i]();
// }
arr.forEach(function (fn) {
    fn();
});