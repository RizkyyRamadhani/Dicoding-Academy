const nama = {
    firstName : "Mohammad",
    lastName : "Rizky Ramadhani",
    age : 20
}

let firstName = "Rama";
let age = 12;



// inisialisasi nilai baru menggunakan destructuring object
({firstName, age} = nama);
console.log(firstName);
console.log(age);

// const {firstName, lastName, age} = nama;

// console.log(firstName, lastName, age);


// menambahkan data dalam variable 
const data = {
    pertama : "Mohammad",
    kedua : "Rizky",
    umur : 20
}

// mengambil data lokal
const {pertama: localPertama, kedua: localKedua, umur: localUmur} = data;


const {pertama, kedua, umur, isMale=true} = data;
console.log(pertama)
console.log(umur)
console.log(isMale)

// Mengambil data lokal
console.log(localPertama)
console.log(localKedua)
console.log(localUmur)
