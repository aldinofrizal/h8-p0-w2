//1. menyusun barisan bintang
console.log('1. menyusun barisan bintang');
var row1 = 5;
for (i=0; i < row1; i++){
  console.log('*');
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
console.log('2. Menyusun Barisan Bintang Dengan Nested Looping');
var row2=5;
var asterisk =[];
for (i=0; i < row2; i++){
  // console.log(i + ' looping');
  for (j=0; j < row2; j++){
    asterisk.push('*');
    var asteriskJoin = asterisk.join('');
  }
  console.log(asteriskJoin);
  asterisk = [];
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
console.log('3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');
var row3=5;
var asterisk = [];
for (i=0; i < row3; i++){
  // console.log(i + ' looping');
  for (j=0; j<(i+1); j++){
    asterisk.push('*');
    var asteriskJoin = asterisk.join('');
  }
  console.log(asteriskJoin);
  asterisk = [];
}