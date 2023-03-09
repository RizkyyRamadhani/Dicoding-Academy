// array Map
const newArray = ['Mohammad', 'Rizky', 'Ramadhani'].map((name) => {return `${name}`});
console.log(newArray);

console.log("------------------------------");
// array Filter
const students = [
{
    name: 'Harry',
    score: 60,
},
{
    name: 'James',
    score: 88,
},
{
    name: 'Ron',
    score: 90,
},
{
    name: 'Bethy',
    score: 75,
}
];

const eligibleForScholarshipStudents = students.filter((student) => student.score > 85);

console.log(eligibleForScholarshipStudents);
console.log("------------------------------");

// Array Reduce
const murid = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const totalScore = murid.reduce((acc, student) => acc + student.score, 0);
  
  console.log(totalScore);
  console.log("------------------------------");
//   array Some
const array = [1, 2, 3, 4, 5];
const even = array.some(element => element % 2 === 0);

console.log(even);
console.log("------------------------------");

// Array find
const siswa = [
    {
      name: 'Harry',
      score: 60,
    },
    {
      name: 'James',
      score: 88,
    },
    {
      name: 'Ron',
      score: 90,
    },
    {
      name: 'Bethy',
      score: 75,
    }
  ];
  
  const findJames = siswa.find(student => student.name === 'James');
  console.log(findJames);
  console.log("------------------------------");

//   Array Sort
// digunakan untuk mengurutkan nilai
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// urutkan angka
const array1 = [1, 30, 4, 1000, 101, 121];
const pindahAngka = (a,b) => {
    return a-b;
};

array1.sort();
console.log(array1);

// Urutkan angka dari terkecil
const sorting = array1.sort(pindahAngka);
console.log(sorting);

// array Every
const nilai = [70,85,90];
const minimalNilai = 100;

const kelulusan = nilai.every(nilai => nilai >= minimalNilai);

console.log(kelulusan);

// array ForEach
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
 
names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});