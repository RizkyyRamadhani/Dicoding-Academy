function sapaan(nama , negara) {
    if (negara === "Inggris"){
        console.log(`Good Morning ${nama}`);
    }else if (negara === "indonesia"){
        console.log(`Selamat Pagi ${nama}`);
    }else {
        console.log(`selamat pagi ${nama}`)
    }
}

sapaan("Rizky", "indonesia");

console.log("-----------------------------------")

function multiply(a, b) {
    return a*b;
}

let result = multiply(10,2)
console.log(result)

console.log("-----------------------------------")

function greeting (name, country){
    if (country === "England") {
        console.log(`Hallo Sir ! ${name}`)
    } else if (country = "Spanyol") {
        console.log(`glory glory man united ${name}`)
    } else {
        console.log("Selamat Pagi kak")
    }
}

let hasil = greeting("Rizky", "england")

console.log("---------------------------------------")

// expression function

const halo = function(jeneng, omongan) {
    if (omongan === "English") {
        return "Good Morning " + jeneng + "!";
    } else if (omongan === "Jawa") {
        return "Hallo cak " + jeneng + "!";
    } else {
        return "hallo sayang";
    }
}

console.log(halo("Rizky", "Jawa"))