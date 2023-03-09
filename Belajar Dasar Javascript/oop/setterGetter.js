class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName (fullName) {
        const [firstName, lastName] = fullName.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const user = new User('Rizky', 'Ramadhani');
console.log(user)
console.log(user.fullName);

user.fullName = 'Fulan Fulanah';
console.log(user);
console.log(user.fullName);


console.log("--------------------------------------");

class Car {
    constructor(brand, color, maxSpeed) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;

        // contoh setting tipe mobil secara random
        this._chassisNumber = this._generateChassisnumber();
    }

    get chassisNumber() {
        return this._chassisNumber;
    }

    // setting chassisNumber agar tidak dapat diubah dengan setter
    set chassisNumber(chassisNumber){
        console.log("Kamu tidak bisa mengubah chassis number");
    }

    // method
    drive() {
        console.log(`${this.brand} ${this.color} is Driving` );
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is Reversing` );
    }

    Turning() {
        console.log(`${this.brand} ${this.color} is Turning ${direction}` );
    }

    _generateChassisnumber() {
        return `${this.brand}-${Math.floor(Math.random()*1000)}`;
    }
}

const car = new Car ('toyota', 'blue', 200);

console.log(car._chassisNumber);
car._chassisNumber = 'BMW-1';
console.log(car._chassisNumber);
console.log(car._generateChassisnumber());
