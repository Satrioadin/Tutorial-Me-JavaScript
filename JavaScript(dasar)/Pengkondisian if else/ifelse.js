var jmlAngkot = 10;
var angkotBeroprasi = 6;


for( var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
    
    if( noAngkot <= 6 ) {
        console.log('Angkot No. ' + noAngkot + ' beroprasi dengan baik');   
    }else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroprasi');
    }

}

// Penggunaan Else ifasdasd
var angka = prompt('Ketik angka bebas:');

if (angka % 2 == 0) {
    alert(angka + ' Adalah bilangan GENAP');
} else if (angka % 2 == 1) {
    alert(angka + ' Adalah bilangan GANJIL');
}else {
    alert('yang anda masukan bukan angka!!')
}