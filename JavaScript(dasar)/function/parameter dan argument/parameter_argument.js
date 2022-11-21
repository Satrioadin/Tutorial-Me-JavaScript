// contoh coding argument
// function tambah(a, b) {
//     return a + b;
// }

// function kali(a, b) {
//     return a * b;
// }

// var a = parseInt(prompt('masukan nilai 1 :'));
// var b = parseInt(prompt('masukan nilai 2 :'));
// var hasilTambah = tambah(a*2, b*2);
// alert(hasilTambah);

// var hasilKali = kali(tambah(1,2), tambah(3,4));
// alert(hasilKali)

// contoh coding argument
// array yang berisi nilai yang di kirimkan saat fungsi dipanggil
function tambah() {

    var hasil = 0;
    for( var i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3,4,5,6,7,8,9);
alert(coba)