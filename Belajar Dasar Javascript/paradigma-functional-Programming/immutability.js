// immutability berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat
const user = {
    firstname: 'Rizky',
    lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
    return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Ramadhani', user);

console.log(newUser);