class Animal {
    constructor (name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

class Rabbit extends Animal {
    eat() {
        return `${this.name} sedang makan!`;
    }
}

class Eagle extends Animal {
    fly() {
        return `${this.name} sedang terbang!`;
    }
}

const myRabbit = new Rabbit('Labi', 2);
myRabbit.isMammal = true;
console.log(myRabbit.eat())
console.log(myRabbit)

const myEagle = new Eagle('Elo', 4);
myEagle.isMammal = false;
console.log(myEagle.fly())
console.log(myEagle)