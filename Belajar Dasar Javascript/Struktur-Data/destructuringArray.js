const makan = ["Nasi Goreng", "Soto Ayam", "Mie Ayam", "Ayam bakar"];
const minum = ["es teh", "es jeruk", "Teh hangat"];

// menambahkan object melakukan destructuring Assignment
let makananSaya = "Mie goreng";
let makananDia = "omelete";

[makananSaya, makananDia] = makan;

const [makananPertama, makananKedua, makananKetiga, makananKeempat] = makan;

// jika ingin mengambil array langsung dari ke 3, maka tidak usah mendeklarasikan dari awal 
const[, , minumketiga]=minum;

console.log (makananPertama);
console.log (makananKedua);
console.log (makananKetiga);
console.log (makananKeempat);
console.log (minumketiga);

console.log("-------------------------")
// memanggil hasil object destructuring assignment
console.log(makananSaya)
console.log(makananDia)
console.log("-------------------------")



// array destructuring assignment menggunakan algoritma sorting dalam contoh menggunakan variable tambahan
var nilaiSaya = 1; 
var nilaiDia = 2;
var temp;

console.log("sebelum di ganti");
console.log("Nilai saya: " + nilaiSaya)
console.log("Nilai Dia: " + nilaiDia)

temp = nilaiSaya;
nilaiSaya = nilaiDia;
nilaiDia = temp;

console.log ("Sesudah di ganti")
console.log("nilai Saya: " + nilaiSaya);
console.log("nilai Dia: " + nilaiDia);

("-------------------------")
let nilaiKu = 5;
let nilaiMu = 6;

console.log("sebelum di Ubah");
console.log("nilaiku adalah " + nilaiKu);
console.log("nilaimu Adalah " + nilaiMu);

[nilaiKu, nilaiMu] = [nilaiMu, nilaiKu];

console.log("sesudah di Ubah")
console.log("nilaiku adalah " + nilaiKu)
console.log ("nilaiMu adalah " + nilaiMu)
