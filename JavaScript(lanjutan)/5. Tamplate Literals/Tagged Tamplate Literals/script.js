// Tagged Tamplates
// const nama = "Satrio";
// const umur = 19;

// function coba(strings, ...values) {
//     // let result = '';
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`;
//     // });
//     // return result

//     // memakai reduce
//     return strings.reduce((result, str, i) => `${result}${str}${values
//     [i] || ''}`,'');
// }

// const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
// console.log(str);


// HighLight
const nama = "Satrio";
const umur = 19;
const email = 'ssatrio994@gmail.com';

function highLight(strings, ...values) {
    // memakai reduce
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values
    [i] || ''}</span>`,'');
}

const str = highLight`Halo, nama saya ${nama}, saya ${umur} tahun. dan email saya adalah : ${email}`;
document.body.innerHTML = str;