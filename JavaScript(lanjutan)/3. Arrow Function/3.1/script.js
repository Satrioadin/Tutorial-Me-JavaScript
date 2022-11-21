// arrow function

// function expression tanpa arrow function
// const tampilNama = function (nama) {
//     return `hallo, ${nama}`;
// }
// console.log(tampilNama('satrio'));

// function expression dengan arrow function
// const tampilNama = nama => {return `hallo, ${nama}`;}
// console.log(tampilNama('satrio'));
// dan jika parameternya hanya satu tidak diwajibkan memakai tanda (), return dan juga kurung kurawal. bisa disebut juga implisit return
// const tampilNama = nama => `hallo, ${nama}`;
// console.log(tampilNama('satrio'));

// parameter lebih dari 1
// const tampilNama = (nama, waktu) => {
//     return `selamat ${waktu},${nama}`;
// }
// console.log(tampilNama('satrio', 'Pagi'))

// tanpa parameter
// const tampilNama = () => `satrio adi`;
// console.log(tampilNama());

// ===============================================================================================
// ===============================================================================================


// contoh kasus dengan menggunakan function map untuk menetakan sebuah function kedalam array

// contoh dengan functon biasa
// let mahasiswa = ['satrio', 'adi', 'nugroho'];
// let jumlahHuruf = mahasiswa.map(function(nama) {
//     return nama.length;
// })

// console.log(jumlahHuruf);

// contoh dengan arrow function mengembailan array
// let mahasiswa = ['satrio', 'adi', 'nugroho'];
// let jumlahHuruf = mahasiswa.map(nama => nama.length);
// console.log(jumlahHuruf)

// contoh dengan arrow fonction mengembalikan object
let mahasiswa = ['satrio', 'adi', 'nugroho'];
let jumlahHuruf = mahasiswa.map(nama => ({ nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf);