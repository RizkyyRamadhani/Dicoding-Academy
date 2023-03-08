function namaLengkap() {
    const nama = "Rizky"; //variabel lokal dalam scope function namaLengkap

    function perkenalan() { //inner function, merupakan contoh closure
        console.log(`Perkenalkan nama saya ${nama}`); // memanggil variable yang dideklarasikan di parent function
    }
    perkenalan();
}

namaLengkap();

console.log("------------------------------------")
let counter = 0;

const add = () => {
    return ++counter;
}

console.log(add())
console.log(add())
counter = 100;
console.log(add())
console.log(add())

console.log("----------------------------")

const tambah = () => {
    let counter = 0;
    return () => {
        return ++counter;
    };
} 

const tambahCounter = tambah();

console.log(tambahCounter());
console.log(tambahCounter());
console.log(tambahCounter())