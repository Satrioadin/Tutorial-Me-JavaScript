// 1. HTML Fragments
// const mhs = {
//     nama : 'Satrio',
//     umur : 19,
//     nim : '211121004',
//     email : 'ssatrio994@gmail.com'
// };

// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span>${mhs.nim}</span>
// </div>`;


// 2. Looping
// const mhs = [
//     {
//         nama : 'Satrio',
//         email : 'ssatrio994@gmail.com'
//     },
//     {
//         nama : 'Adi',
//         email : 'adi994@gmail.com'
//     },
//     {
//         nama : 'Nugroho',
//         email : 'nugroho994@gmail.com'
//     }
// ]

// const el = `<div class="mhs">
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`



// 3. Conditional
// ternary oprator (baris50)
// const lagu = {
//     judul: 'Tetap Dalam Jiwa',
//     penyanyi : 'Isyana Sarasvati',
// }

// const el = `<div class="mh">
//     <ul>
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;



// 4. Nested
const mhs = {
    nama : "Satrio",
    semester : 2,
    mataKuliah : [
        "Kalkulus",
        "Matematika Diskrit",
        "Aljabar Linear",
        "Pengantar Bisnis dan Manajemen"
    ]
}

function cetakMataKuliah(mataKuliah) {
    return `
        <ol>
            ${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
        </ol>
    `;
}

const el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span>${mhs.semester}</span>
    <h4>Mata Kuliah</h4>
    ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;