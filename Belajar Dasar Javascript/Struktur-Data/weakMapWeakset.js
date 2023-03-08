let visitsCountMap = new Map();

function hitungUser(user) {
    let hitung = visitsCountMap.get(user) || 0;
    visitsCountMap.set(user, hitung + 1);
}

let rizky = {name : "Rizky"};
hitungUser(rizky);

rizky = null;

setTimeout(function() {
    console.log(visitsCountMap);
}, 10000)

console.log("---------------------------------------")

const {inspect} = require('util');

let mapBaru = new WeakMap();

function countUser(admin) {
    let count = mapBaru.get(admin) || 0;
    mapBaru.set(admin, count + 1);
}

let ramadhani = {name: "Ramadhani"};

ramadhani = null;

setTimeout(function(){
    console.log(inspect(mapBaru, {showHidden:true}));
}, 10000);