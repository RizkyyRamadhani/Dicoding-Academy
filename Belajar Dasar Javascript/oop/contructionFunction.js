function Hp (brand, color, price, type) {

    // properti
    this.brand = brand;
    this.color = color;
    this.price = price;
    this.type = type;
}

    // method
Hp.prototype.drive = function() {
    console.log(`${this.brand} ${this.color} is driving`);
}

Hp.prototype.reverse = function() {
    console.log(`${this.brand} ${this.color} is reversing`);
}
Hp.prototype.turn = function() {
    console.log(`${this.brand} ${this.color} is turn`);
}

// membuat object handphone dengan constructor function Hp
const hp1 = new Hp ('Samsung', 'red', 100000, 'a-1');
const hp2 = new Hp ('Oppo', 'blue', 200000, 'a-2');
const hp3 = new Hp ('Xiaomi', 'green', 300000, 'a-3');

console.log(hp1);
console.log(hp2);
console.log(hp3);

hp1.drive();
hp2.reverse();
hp3.turn();