// map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya object
const map = new Map ([
    ['1', 'a String key'],
    [1, 'a number key'],
    [true, true]
]);

console.log (map)
console.log ("----------------------------")

const kota = new Map ([
    ['indonesia', 'Jakarta' ],
    ['england', 'london'],
    ['Jepang', 'Tokyo'] 
]);

console.log (kota)
console.log(kota.size)
// get untuk mengambil nilai 
console.log(kota.get('indonesia'));
// set untuk menambahkan nilai
console.log(kota.set('arab', 'saudi'));
console.log(kota.get('arab'))

console.log("-------------------------------")

const mapSalah  = new Map();
mapSalah["My Key"] = "My Value";

console.log(mapSalah.has("My Key"));
console.log(mapSalah.delete("My Key"))