var tanggal; // valid 1-31
var bulan; // valid 1-12
var tahun; // valid 1900 - 2200

function fTanggal(tanggal){
  if (tanggal > 31 || tanggal < 1){
    return false;
  }else {
    return tanggal;
  }
}

function fTahun(tahun){
  if (tahun < 1900 || tahun > 2200){
    return false;
  }else{
    return tahun;
  }
}

function getBulan(bulan){
  switch (bulan){
  case 1:
    return 'Januari';
    break;
  case 2:
    return 'Februari';
    break;
  case 3:
    return 'Maret';
    break;
  case 4:
    return 'April';
    break;
  case 5:
    return 'Mei';
    break;
  case 6:
    return 'Juni';
    break;
  case 7:
    return 'Juli';
    break;
  case 8:
    return 'Agustus';
    break;
  case 9:
    return 'September';
    break;
  case 10:
    return 'Oktober';
    break;
  case 11:
    return 'November';
    break;
  case 12:
    return 'Desember';
    break;
  default:
    return false;
  }
}

function output(tanggal,bulan,tahun){
  if (fTanggal(tanggal) === false || getBulan(bulan) === false || fTahun(tahun) === false){
    console.log('Input invalid');
  }else {
    console.log(fTanggal(tanggal) + ' ' + getBulan(bulan) + ' ' + fTahun(tahun));
  }
}  
  


// Test program untuk beberapa input
output(124,15,2012);
output(12,7,2019);
output(12,4,2300);
