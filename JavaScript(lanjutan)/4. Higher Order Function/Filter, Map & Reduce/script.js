const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// mencari angka >= 3

// menggunakan for biasa
// const newAngka = []
// for( let i = 0; i < angka.length; i++) {
//     if(angka[i] >= 3) {
//         newAngka.push(angka[i]);
//     }
// }
// console.log(newAngka);

// menggunakan Filter dan juga arrow function
// const newAngka = angka.filter(a =>a >= 3);
// console.log(newAngka);

// menggunakan map dan ini tidak menghilangka array yang lama
// kalikan semua angka dengan 2
// const newAngka = angka.map(a => a * 2);
// console.log(newAngka);

// menggunakan reduce 
// jumlahkan seluruh element pada array
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9 (yang terjadi)
// reduce juga mempunyai nilai awal yaitu 0 jadi jika kita tidak memerlukan nilai awal kita bisa kosongkan saja
// ini sangat bermanfaat ketika kita ingin menambahkan nilai lagi ke user dengan menjublahkan histori sebelumnya
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5);
// default
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// console.log(newAngka);




// method chaining
// cari angka >= 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a >= 5) // 8,9,9
    .map(a => a * 3) // 24,27,27
    .reduce((acc, cur) => acc + cur); // 78

console.log(hasil);