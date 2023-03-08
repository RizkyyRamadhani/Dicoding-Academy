// data Set tidak dapat menumpuk atau duplikat
const angkaSet = new Set([1, 3, 4 ,3, 1]);

// menambahkan data Set menggunakan add
// fungsi add hanya menerima 1 argumen
angkaSet.add(5);

// menghapus menggunakan delete. tidak di ambil dari index tetapi langsung angkanya
angkaSet.delete(3);


console.log(angkaSet)