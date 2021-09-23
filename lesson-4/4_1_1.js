// es5
function product(name, price) {
    this.name = name
    this.price = price
}

product.prototype.make25PercentDiscount = function () {
    return this.price - this.price * 0.25
}

let obj1 = new product('tomato', 100)
console.log('ES5 name: ' + obj1.name, 'ES5 price: ' + obj1.price, 'ES5 discount price: ' + obj1.make25PercentDiscount())

// es6
class product2 {
    constructor(name2, price2) {
        this.name2 = name2
        this.price2 = price2
    }

    make25PercentDiscount2() {
        return this.price2 - this.price2 * 0.25
    }
}
let obj2 = new product2('water melon', '150')
console.log('ES6 name: ' + obj2.name2, 'ES6 price: ' + obj2.price2, 'ES6 discount price: ' + obj2.make25PercentDiscount2())
