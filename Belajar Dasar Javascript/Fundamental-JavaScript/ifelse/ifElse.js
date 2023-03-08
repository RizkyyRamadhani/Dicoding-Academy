const isRaining = false;

console.log("Persiapan Berangkat Kuliah");
if (isRaining) {
    console.log("membawa Payung");
}
console.log("Berangkat Kuliah")

console.log("-------------------------")
// dalam studi kasus ini adalah yaitu saat hujan jika hasil nya true maka akan membawa payung dan jika tidak maka langsung berangkat sekolah

const nilai = false;

console.log("Kenaikan Kelas");

if (nilai){
    console.log("Nilai anda Bagus");
    console.log("Selamat Anda Naik Kelas")
} else{
    console.log("nilai anda jelek")
    console.log("perbaiki")
};

console.log("--------------------------")

let x = 50;

if (x >60) {
    console.log (x);
} else {
    console.log ("nilai kurang dari 60");
}

console.log("---------------------------")

let bahasa = "Jepang";
let sapaan = "Selamat Pagi"

if (bahasa === "Inggris"){
    sapaan = "hello!";
} else if (bahasa === "francis") {
    sapaan = "Bonjour!";
}else if (bahasa === "Jepang") {
    sapaan = "Ohayou Gozaimasu!";
};

console.log(sapaan)

console.log("---------------------------")

const member = false;
const diskon = member ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${diskon *100}`)

console.log("---------------------------")
let nama = "";

if (nama) {
    console.log(`halo, ${nama}`);
}else {
    console.log("Nama masih kosong, silahkan isi Nama");
}