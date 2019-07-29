var nama;
var peran;

function output(peran, nama){
  if(peran === '' && nama !== ''){
   console.log('Halo ' + nama + ', Pilih peranmu untuk memulai game'); 
  }else{
   cekPeran(peran,nama);
   cekNama(nama);
  }
}
"Halo Ksatria Nina, kamu dapat menyerang dengan senjatamu!"

function cekPeran(peran,nama){
  if(peran === 'Tabib'){
    console.log('Halo ' + peran + ' ' + nama + ' kamu dapat membantu temanmu yang terluka');
  }else if(peran === 'Ksatria'){
    console.log('Halo ' + peran + ' ' + nama + ' kamu dapat menyerang dengan senjatamu');
  }else if(peran === 'Penyihir'){
    console.log('Halo ' + peran + ' ' + nama + ' ciptakan keajaiban yang membantu temanmu');
  }else if(peran === ''){
    console.log('Halo ' + peran + ' ' + nama + ' kamu dapat menyerang dengan senjatamu');
  }else{
    console.log('peran tidak tersedia');
  }
}

function cekNama(nama){
  if(nama === ''){
    console.log('Nama harus diisi');
  }else{
    console.log('Selamat datang di dunia proxytia ' + nama);
  }
}


// input nama dan peran
// format input output('peran' , 'nama')
// berikut adalah hasil percobaan untuk beberapa input
output('','Jon')
output('Tabib','Faaz');
output('Ksatria', 'Jaw');
output('Penyihir' , 'Rony');
output('','');