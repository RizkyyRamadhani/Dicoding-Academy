const nama = () => {
    console.log('Rizky')
};

const name = (someFunction) => {
    someFunction();
}  

const sayName = ()=> {
    return () => {
        console.log('Mohammad Rizky Ramadhani')
    }
}

nama();
name(nama);
sayName()();


const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if(!item) return newArray;
    return loopTrough(arr, action, [...newArray, action(arr[index])], index + 1);
  }

  return loopTrough(arr, action);
}


const newNames = arrayMap(names, (name) => `${name}!` );

console.log({
    names,
    newNames,
});
