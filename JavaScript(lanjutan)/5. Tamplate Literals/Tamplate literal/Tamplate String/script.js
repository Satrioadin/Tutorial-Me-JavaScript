// Tamplate literals / Tamplate String
// const nama = 'Satrio';
// const umur = 19;
// console.log(`Halo, nama saya ${nama}, umur saya ${umur}`);

// Embedded Expression
// console.log(`${1+1}`);
// const x = 10;
// ternary
// console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`);

// HTML Fragments
const mhs = {
    nama : 'Satrio',
    umur : 19,
    nim : '211121004',
    email : 'ssatrio994@gmail.com'
};

const el = `<div class="mhs" 
    <h2>${mhs.nama}</h2>
    <span>${mhs.nim}</span>
</div>`

console.log(el);