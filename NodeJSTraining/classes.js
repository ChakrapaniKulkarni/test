// function sellingitem() {
//     this.qnty = 20;
//     this.price = 30;
// }
// this.prototype.sold = function () {
//     this.qnty--;
// }
// var pen = new sellingitem;

class sellingItem {
    constructor() {
        this.qnty = 20;
        this.price = 30;
    }
    sold() {
        this.qnty--;
    }
}
var pen = new sellingItem;