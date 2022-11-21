// method selection

// getElementById()
// menghasilkan elemen


// getElementsByTagName()
// menghasilkan HTML COLLECION

// getElementsByClassName()
// menghasilkan Html collection

// querySelectror()
// menghasilkan element

// querySelectorAll()
// menghasilkan Note List


// DOM manipulasi

// manipulasi element
// method element

// element.innerHTML
// merubah isi text yang sudah dimiliki
// const judul = document.getElementById('judul');
// judul.innerHTML = 'Hello Satrio';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = 'Hello World';

// element.style.<property>
// merubah style atau sebuah element css yang sudah dimiliki
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';

// element.setAttribute()
// manipulasi pada sebuah element yang melekat pada element yang sudah kita seleksi
// const judul = document.getElementById('judul');
// judul.setAttribute('href', 'www.youtube.com');

// menghilangkan attribute
// judul.removeAttribute('href');

// element.classList
// menipulasi pada attribute class karena class boleh memiliki lebih dari 1 class dan class yang sama bisa di pakai kebeberapa class lain

// element.classList.add()
// menambahkan class
const p2 = document.querySelector('.p2');
// p2.classList.add('label');

// element.classList.remove()
// p2.classList.remove("label");

// element.classList.toggle()
// p2.classList.toggle('biru-muda');

// element.classLsit.item()
// mengetahui nama class . dan menghitungnya dari index ke 0
p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');
p2.classList.item(2)

// element.classList.contains()
// mengecek apakah ada nama kelas yang namanya mau kita cek

// element.classList.replace()