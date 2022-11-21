// 1.Manipulasi Array

// Menambah isi Array
// var arr=[];
// arr[0] = 'Satrio';
// arr[1] = 'adi';
// arr[2] = 'Nugroho';

// console.log(arr);

// 2.Menghapus isi array manual
// var arr = ['Satio', 'Dodi', 'Betit', 'cukis'];
// arr[3] = undefined;
// console.log(arr);

// 3.Menampilkan isi array manual
// var arr = ['Satio', 'Dodi', 'Betit', 'cukis'];

// for( var i = 0; i < arr.length; i++) {
//     console.log('Manusia ke-' + (i+1) + ' : ' + arr[i]);
// }

// method pada array
// 1.Join
// join mengubah isi array menjadi string dan menampilkanya dengan rapih
// var arr = ['Satio', 'Dodi', 'Betit', 'cukis'];
// console.log(arr.join(' - '));

// push & pop 
// Push untuk menambah elemen array di akhir array
// pop menghilangkan element terakhir dari array
// var arr = ['Satio', 'Dodi', 'Betit', 'cukis'];
// // arr.push('betit');
// arr.pop();
// console.log(arr.join(' - '));

// 3.unshift & shift
// seperti push & pop menambahkan element baru pada awal
// var arr = ['Satio', 'Dodi', 'Betit', 'cukis'];
// // arr.unshift('betit');
// arr.shift();
// console.log(arr.join(' - '));

// slice & splice
// Slice untuk mengambil beberapa array untuk menjadikan array yang baru
// Splice menyambung atau menambal,bisa untuk menyisipkan element atau menambahkan

// 4.slice
// var arr = ['Satio', 'Dodi', 'Betit', 'cukis'];
// // rumus splice
// // splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2,...)
// arr.splice(2, 0, 'Mono');
// console.log(arr.join(' - '));

// 5.slice
// var arr = ['Satio', 'Dodi', 'Betit', 'cukis', 'Mono', 'Ambon'];
// // Rumus slice = slice(awal,akhir)
// var arr2 = arr.slice(1,3);
// console.log(arr2.join(' - '));

// 6.foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Satio', 'Dodi', 'Betit', 'cukis'];
// // for( var i =0; i < angka.length; i++) {
// //     console.log(angka[i]);
// // }
// // angka.forEach(function(e) {
// //     console.log(e);
// // });
// nama.forEach(function(e, i) {
//     console.log('Manusia ke-' + (i+1) + ' adalah : ' + e)
// })

// 7.Map
// map lebih baik dari forEach karna map mengembalikan array
// var angka = [1,2,5,6,8,7,9];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// })

// console.log(angka2.join(' - '));

// 8.sort
// menjadi hasil mengurut
// var angka = [1,2,5,6,8,7,9,20,50,10,500];
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));

// 9. Filter & find
// filter bisa mengembalikan banyak nilai
// find hanya mengembalikan satu nilai
// var angka = [1,2,5,6,8,7,9,20,50,10,500];
// var angka2 = angka.filter(function(x) {
//     return x > 5;
// });
// console.log(angka2.join('- '));