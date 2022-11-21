// cara membuat object pada javascript
// 1. Object literal
// problem pada literal jika ada beberapa object mahasiswa kita harus membuatnya lebih banyak variable seperti di bawah dan nama variablenya juga harus berbeda, tidak efektif untuk object yang banyak
// let mahasiswa1 = {
//     nama: 'Satrio',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }
// }
// console.log(mahasiswa1.makan(2));

// let mahasiswa2 = {
//     nama: 'Adi',
//     energi: 10,
//     makan: function(porsi) {
//         this.energi = this.energi + porsi;
//         console.log(`halo ${this.nama}, selamat makan!`);
//     }
// }
// console.log(mahasiswa2.makan(2));


// 2. Function Declaration
// keuntungan function declaration kita tidak perlu membuat duplikat dari objectnya dan function declaration harus di beri return
// function Mahasiswa(nama,energi) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan!`);
//     }

//     mahasiswa.main = function(jam) {
//         this.energi -= jam;
//         console.log(`hallo ${this.nama}, selamat bermain`);
//     }
    
//     return mahasiswa;
// }

// let satrio = Mahasiswa('satrio', 10); 
// // console.log(satrio.makan(2)); 
// // console.log(satrio.main(5));
// let adi = Mahasiswa('adi', 10); 
// // console.log(adi.makan(2));
// // console.log(adi.main(5));


// 3. Constructor Functoin
// menggunakan keyword new dan juga constructor function sering kali kita gunakan karena constructor function bisa lebih mudah kalo kita mau menggunakan prototype dan object di dalamnya
// function Mahasiswa(nama,energi) {
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function(porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan!`);
//     }

//     this.main = function(jam) {
//         this.energi -= jam;
//         console.log(`hallo ${this.nama}, selamat bermain`);
//     }
// }

// let satrio = new Mahasiswa('satrio', 10)


// 4. Object.create()
// dengan mengunakan ini kita jadi lebih menghemat penggunaan memory tapi problemnya kita jadi mengelola 2 buah object
// const methodMahasiswa = {
//     makan: function(porsi) {
//         this.energi += porsi;
//         console.log(`hallo ${this.nama}, selamat makan!`);
//     },

//     main: function(jam) {
//         this.energi -= jam;
//         console.log(`hallo ${this.nama}, selamat bermain`);
//     },

//     tidur: function(jam) {
//         this.energi += jam *2;
//         console.log(`hallo ${this.nama}, selamat tidur`);
//     }
// }

// function Mahasiswa(nama, energi) {
//     let mahasiswa = Object.create(methodMahasiswa);
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     return mahasiswa;
// }

// let satrio = Mahasiswa('satrio', 10);


// 5. Prototype
// function Mahasiswa(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
// }

// Mahasiswa.prototype.makan = function(porsi) {
//     this.energi += porsi;
//     return `hallo ${this.nama}, selamat makan`;
// }
// Mahasiswa.prototype.main = function(jam) {
//     this.energi -= jam;
//     return `hallo ${this.nama}, selamat bermain!`;
// }
// Mahasiswa.prototype.tidur = function(jam) {
//     this.energi += jam*2;
//     return `hallo ${this.nama}, selamat tidur!`;
// }

// let satrio = new Mahasiswa('satrio', 10);

// versi menggunakan class
// class Mahasiswa {
//     constructor(nama, energi) {
//         this.nama = nama;
//         this.energi = energi;
//     }

//     makan(porsi) {
//         this.energi += porsi;
//         return `hallo ${this.nama}, selamat makan`;
//     }

//     main(jam) {
//         this.energi -= jam;
//         return `hallo ${this.nama}, selamat bermain!`;
//     }

//     tidur(jam) {
//         this.energi += jam*2;
//         return `hallo ${this.nama}, selamat tidur!`;
//     }
// }

// let satrio = new Mahasiswa('satrio', 10);
// let adi = new Mahasiswa('adi', 10);