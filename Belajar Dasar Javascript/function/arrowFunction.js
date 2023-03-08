// Perbedaan  reguler function dan arrow function

// regular function 
function sayHello(greet) {
    console.log(`${greet}`);
}
sayHello("Hi")

const sayName = function (name) {
    console.log(`nama saya ${name}`)
}
sayName("Rizky")

// arrow function 
const sayNama = nama => {
    console.log(`Nama saya ${nama}`)
}

sayNama("Ramadhani")

// contoh jika body dari function hanya terdiri dari satu baris
const namaLengkap = jeneng => console.log(`Nama saya ${jeneng}`);
namaLengkap("Rizky");

const hi = () => console.log("Selamat Pagi Semuanya");
hi ()

const multiply = (a, b) => a*b;
console.log(multiply(3,7));