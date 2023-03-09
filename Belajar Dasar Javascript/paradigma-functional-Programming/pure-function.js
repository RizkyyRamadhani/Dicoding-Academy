// contoh impure function
let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
  return PI * (jariJari * jariJari); 
}

console.log(hitungLuasLingkaran(4)); // 50.24

PI = 5; // tidak sengaja nilai PI berubah

console.log(hitungLuasLingkaran(4)); // 80

console.log("----------------------------")

// contoh pure function. sama seperti di atas tetapi lebih simple
const luasLingkaran = (jariJari) => {
    return 3.14 * (jariJari* jariJari);
}

console.log(luasLingkaran(1))

console.log("----------------------------")
// menggunakan destructuring object dari pada mengubah object tersebut secara langsung
const buatUmur = (umur, orang) => {
    return {...orang, umur};
};

const orang = {
    nama:'Rizky'
};

const newOrang = buatUmur(20, orang);

console.log({
    orang, newOrang
});