// konsep this pada arrow function

// constructor function
// const Mahasiswa = function() {
//     this.nama = 'satrio';
//     this.umur = 19;
//     this.sayHello = function() {
//         console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const satrio = new Mahasiswa();

// dengan menggunakan arrow function
// const Mahasiswa = function() {
//     this.nama = 'satrio';
//     this.umur = 19;
//     this.sayHello = () => {
//         console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }
// }

// const satrio = new Mahasiswa();

// menggunakan object literal
// const mhs1 = {
//     nama: 'satrio',
//     umur: 19,
//     sayHello: () => {
//         // arrow function tidak memiliki this
//         // console.log(`halo. nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//         // console.log(this);
//     }
// }

// contoh kasus
// const Mahasiswa = function() {
//     this.nama = 'satrio';
//     this.umur = 19;
//     this.sayHello = function() {
//         console.log(`halo, nama saya ${this.nama}, dan saya ${this.umur} tahun`);
//     }

//     setInterval(() => {
//         // console.log(this.umur++);
//     }, 500)
// }

// const satrio = new Mahasiswa();







// contoh real jika digunakan dikenyataan
const box = document.querySelector('.box');
box.addEventListener('click', function() {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu, dua] = [dua, satu];
    }

    this.classList.toggle(satu);
    setTimeout(() => {
        this.classList.toggle(dua);
    }, 600)
})