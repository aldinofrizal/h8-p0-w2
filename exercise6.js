// 1. Melakukan Looping Menggunakan While
console.log('1. Melakukan looping menggunakan while');
console.log('Looping Pertama');
var i = 2;
while (i <= 20){
  console.log(i + '-' + ' I Love Coding');
  i=i+2;
}
console.log('Looping Kedua');
i = 20;
while (i >= 2){
  console.log(i + '-' + ' I Love Coding');
  i = i-2;
}

// 2. Melakukan Looping Menggunakan for
console.log('2. Melakukan Looping Menggunakan for');
console.log('Looping Pertama')
for (i=1 ; i<=20; i++){
  console.log(i + '-' + ' I Love Coding');
}
console.log('Looping Kedua');
for (i=20 ; i>=1; i--){
  console.log(i + '-' + ' I Love Coding');
}

// 3.  Angka Ganjil dan Genap
console.log('3. Angka Ganjil dan Genap');
console.log('counter 1');
for (i=1; i <= 100; i++){
  if (i % 2 == 0){
    console.log( i + ' GENAP');
  }else {
    console.log(i + ' GANJIL');
  }
}

console.log('counter 2');
for (i=1; i <= 100; i+=2){
  if (i % 3 == 0){
    console.log( i + ' kelipatan 3');
  }else{
    console.log('');
  }
}

console.log('counter 5');
for (i=1; i<=100; i+=5){
  if (i % 6 == 0){
    console.log( i + ' kelipatan 6');
  }else{
    console.log('');
  }
}

console.log('counter 9');
for (i=1; i<=100; i+=9){
  if (i % 10 == 0){
    console.log( i + ' kelipatan 10');
  }else{
    console.log('');
  }
}