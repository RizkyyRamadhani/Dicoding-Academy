// Gaya Imperatif
const nama = ['Mohammad', 'Rizky', 'Ramadhani'];

const newNamesWithExcMark = [];
for(let i = 0; i < nama.length; i++) {
    newNamesWithExcMark.push(`${nama[i]}!`);
}

console.log(newNamesWithExcMark);

console.log("---------------------------------")

// Gaya Deklaratif
const names = ['Mohammad','Rizky', 'Ramadhani'];

const namaLengkap = names.map((name) => `${name}`);

console.log(namaLengkap);