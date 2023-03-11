// import dari es6
import coffeStock from "./es6.js";

const displayStock = stock => {
    for (const type in stock) {
        console.log(type);
    }
}

displayStock(coffeStock);