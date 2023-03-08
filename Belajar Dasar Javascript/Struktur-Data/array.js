let myArray = ["biru", 1, 20, "programmer", false];

// tambahkan data pada array menggunakan push
myArray.push("php");

// keluarkan data terakhir dari Array menggunakan pop
myArray.pop();

// shift digunakan untuk mengeluarkan elemen pertama dari array
// unshift menambahkan elemen di awal array
myArray.shift();
myArray.unshift("Jambu");

// Untuk menghapus array menggunakan delete
delete myArray[1];

// menggunakan "splice" untuk menghapus elemen agar kosong
myArray.splice(3,1);

console.log(myArray);
// cek panjang jika tidak ada data maka akan undefined, array dimulai dari 0
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang array saya adalah " + myArray.length + ".");
