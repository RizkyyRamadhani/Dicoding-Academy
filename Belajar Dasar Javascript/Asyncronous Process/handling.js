// handling callback
function getUsers(isOffline,callback) {
    // simulate network delay
    setTimeout(() => {
      const users = ['John', 'Jack', 'Abigail'];

    //   dalam studi kasus ditambahkan isoffline jika terdapat kendala atau error misal mengambil data dari internet menghasilkan error pada jaringan maka akan ditampilkan seperti berikut
    if (isOffline) {
    callback(new Error('cannot retrieve users due offline'), null);
    return;
  }
      callback(null, users);
    }, 3000);
  }
   
//   menentukan fungsi callbacknya agar sesuai dengan getUsers
  function usersCallback(error, users) {
    if (error) {
      console.log('process failed:', error.message);
      return;
    }
    console.log('process success:', users);
  }
   
  getUsers(false, usersCallback);
  getUsers(true, usersCallback);