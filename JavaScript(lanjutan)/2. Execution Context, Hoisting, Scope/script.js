// 2.1 EXECUTION CONTEXT, HOISTING, SCOPE

// console.log(nama);
// var nama = 'satrio';

// creation phase pada global context
// nama variable = undefind
// nama fanction = fn()
// hoisting
// window = global object
// this = window

// execution phase


// var nama = 'satrio';
// var umur = 19;

// console.log(sayHello());

// function sayHello() {
//     return `Halo, nama saya ${nama}, saya ${umur} tahun`
// }

// function membuat local execution context
// yang di dalamnya terdapat ceartion dan execution phase
// window
// arguments
// hoisting

// var nama = 'satrio';
// var username = '@satroadi_56';

// function cetakURL(username) {
//     var instagramURL = 'http://instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL(username));


// contoh kasus
// function satu() {
//     var nama = 'satrio';
//     console.log(nama);
// }

// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'adi';
// satu();
// dua('nugroho');
// console.log(nama);