const makan = ["Nasi Goreng", "Soto Ayam", "Mie Ayam", "Ayam bakar"];
const minum = ["es teh", "es jeruk", "Teh hangat"];

// contoh pertama yaitu menampilkan 2 index dipisah
const menu=[makan, minum];


// menggunakan spreadOperator "..." digunakan untuk menggabungkan 2 index
const allmenu = [...makan, ...minum];

// contoh spread operator digunakan untuk object literals
const object1 = {firstName : "Rizky", Umur : 20};
const object2 = {lastName : "Ramadhani", Gender : "Laki-laki"};

const allObject = {...object1, ...object2};

console.log(menu)
console.log("-------------------------------------")
console.log(allmenu)
console.log("-------------------------------------")
console.log(allObject)