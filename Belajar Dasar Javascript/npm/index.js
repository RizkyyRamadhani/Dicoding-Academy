import _ from 'lodash';
 
const myArray = [1, 2, 3, 4];
let sum = 0;
 
for(let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
}
 
const angka = [1, 2, 3, 4];
const tambah = _.sum(angka);
 
console.log(tambah);
console.log(sum);