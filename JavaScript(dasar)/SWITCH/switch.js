var item = prompt('masukan nama makanan atau minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch(item){
    case 'nasi' :
    case 'daging' :
    case 'susu' :
        alert('muniman / makanan sehat');
        break;
    case 'hamburger' :
    case 'softdrink' :
        alert('adalah makanan / minuman yang tidak sehat');
        break;
    default :
        alert('anda memasukan makanan / minuman yang salah!!');
        break;
}
