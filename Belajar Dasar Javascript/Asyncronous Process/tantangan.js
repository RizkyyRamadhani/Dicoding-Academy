function getProvinces(offline, callback) {
    const province = ['Aceh', 'Bali', 'Banten', 'Bengkulu'];
    if (offline){
callback (new Error('failed to get provinces'), null);
return;
    }
    callback(null, province);
}

function provinceCallback (error, province) {
    if (error) {
        console.log('process failed:', error.message);
        return;
    }
    console.log('proses berhasil :', province);
}


getProvinces(false, provinceCallback);
getProvinces(true, provinceCallback);
