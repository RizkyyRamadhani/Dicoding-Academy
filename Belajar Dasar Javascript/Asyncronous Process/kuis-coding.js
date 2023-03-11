/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

const {promisify} = require('util');

function getProvinces(countryId, callback) {
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
      if (countryId === 'id') {
        resolve([
          { id: 'id-jk', name: 'Jakarta' },
          { id: 'id-bt', name: 'Banten' },
          { id: 'id-jr', name: 'Jawa Barat' },
        ]);
        return;
      }
  
      reject(new Error('Country not found'), null);
    }, 1000);
})
  }
  
  getProvinces('id', false)
  .then((provinces) => {
    console.log(provinces);
  })
  .catch((err) => {
    console.error(err);
  });
  module.exports = { getProvinces: getProvinces };