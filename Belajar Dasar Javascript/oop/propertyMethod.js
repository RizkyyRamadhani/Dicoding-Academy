class Car {
    constructor(brand, color, maxSpeed, chassisNumber) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = chassisNumber;

        // contoh setting tipe mobil secara random
        this.chassisNumber = `${brand}-${Math.floor(Math.random()*1000) +1}`;
    }
}

const Car1 = new Car ('toyota', 'red', 100);
const Car2 = new Car ('Honda', 'blue', 2000);
const Car3 = new Car ('Yamaha', 'yellow', 3000);

console.log(Car1)
console.log(Car2)
console.log(Car3)

console.log('----------------------------------------------')

class Mail {
    constructor(sender, receiver, subject, body){
        this.sender = sender;
        this.receiver = receiver;
        this.subject = subject;
        this.body = body;
    }

    // Methods
    send() {
        console.log(`pesan ini dari ${this.sender} to ${this.receiver}`);
    }

    sendLater(delay) {
        console.log(`Pesan terkirim ${delay} ms`);
           
        setTimeout(() => {
            this.send();
        
        },delay);
    }

    saveAsDraft(){
        console.log(`Pesan tersimpan di draft`);
    }
}

const send = new Mail('Rizky', 'Ramadhani', 'hallo', 'ya');

send.send();
send.sendLater();
