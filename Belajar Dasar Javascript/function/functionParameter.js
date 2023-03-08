const biodata = {
    nama : "M.Rizky Ramadhani",
    nim : "E41200809",
    alamat : "Pasuruan",
    umur : 20,
    sekolah : "Politeknik Negeri Jember"
}

function perkenalan ({nama, nim}) {
    console.log(`${nama}  is  ${nim}`);
}

perkenalan(biodata);

console.log("------------------------------------")

// default function
function exponentsFormula(baseNumber, exponent = 2){
    let result = baseNumber ** exponent;
    console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(3);

console.log("-------------------------------------------")

// rest parameter studi kasus fungsi menjumlahan seluruh nilai argumen
function sum(...numbers) {
    let result = 5;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

console.log (sum(1,2,3,4,5))