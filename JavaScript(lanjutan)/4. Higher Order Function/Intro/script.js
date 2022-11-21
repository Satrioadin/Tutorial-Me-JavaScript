// ketika kita menggerjakan function kita bisa menyimpan function lagi sebagai argument

// Function kerjakanTugas ini bisa disebut juga sebagai Higher Order function
// // dan function sebagai argument (cth:'selesai) bisa disebut juga sebagai Callback
function kerjakanTugas (mataKuliah, selesai) {
    console.log(`mulai mengerjakaan tugas ${mataKuliah}...`);
    selesai();
}

// function argument
function selesai() {
    console.log(`selesai mengerjakan tugas!`);
}

kerjakanTugas('Kalkulus', selesai);


// contoh lain pada return value
function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
    }
}

let selamatMalam = ucapkanSalam('pagi');
console.dir(selamatMalam('satrio'));