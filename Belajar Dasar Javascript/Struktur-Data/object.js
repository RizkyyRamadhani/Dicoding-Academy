const biodata = {
    firstName: "Rizky",
    lastName: "Ramadhani",
    age: 20,
    isMarried: false,
    city: "Pasuruan",
    scholl: "Politeknik Negeri Jember",
    "sekolah smk" : "Smk Yadika Bangil"
}

console.log(`Hi, Perkenalkan nama saya ${biodata.firstName} ${biodata.lastName}`)
console.log(`Umur saya ${biodata.age} tahun`)
console.log(`isMarried ${biodata.isMarried}`)
console.log(`Saya tinggal di ${biodata.city}`)
console.log(`saat ini menempuh pendidikan di ${biodata.scholl}`)
console.log(`Asal Smk saya yaitu ${biodata["sekolah smk"]}`)

console.log("---------------------------------------------------------------")

const sepeda = {
    nama : "supra",
    merk : "Honda",
    cc : 125,
    warna : "hitam"
};

sepeda.nama = "mio";
sepeda["cc"] = 1300;
console.log(sepeda)

console.log("---------------------------------------------------------------")

const mobil = {
    nama : "supra",
    merk : "Honda",
    cc : 125,
    warna : "hitam"
};

mobil.nama = "mio";
mobil["cc"] = 1300;
mobil.class = "Kelas Atas"
console.log(mobil)

console.log("---------------------------------------------------------------")

const dokar = {
    nama : "supra",
    merk : "Honda",
    cc : 125,
    warna : "hitam"
};

dokar.nama = "mio";
dokar["cc"] = 1300;
dokar.class = "Kelas Atas"
delete dokar.warna;
console.log(dokar)