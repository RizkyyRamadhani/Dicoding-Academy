const restaurant ={
    name : "Pojok Wareg",
    city : "Bondowoso",
    "favorite drink" : "Es Jeruk",
    "favorite food" : "Ayam Geprek",
    isVegan : true
}

const {name} = restaurant;
const {"favorite drink": favoriteDrink} = restaurant;

console.log(name);
console.log(favoriteDrink)