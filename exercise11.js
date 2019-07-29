function balikKata(kata) {
    // you can only write your code here!
    var kataBaruArray = [];
    for (var i =0; i < kata.length; i++){
      kataBaruArray.push(kata[kata.length-i-1]);
    }
    var kataBaruString = kataBaruArray.join('');
    return kataBaruString;
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS