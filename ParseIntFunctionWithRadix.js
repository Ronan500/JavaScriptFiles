// Use the parseInt Function with a Radix....

function convertToInteger(str) {
 var table = [[128],[64],[32],[16],[8],[4],[2],[1]];
 var strL = str.length;
 var tableL = table.length;
 var calcul = 0;
 var parse = parseInt(str);
 var nanOrNot = parse.toString();
 if(nanOrNot != "NaN"){
   for(var k=0; k < table.length; k++){
     table[k].push(str[strL - (tableL--)]);
   }
   for(var i=0; i < table.length; i++){
     if(table[i][1] != undefined){
       if(table[i][1] != 0){
         calcul += table[i][0];
       }
     }
   }
   return calcul;
 }else {
   return NaN;
 }
};

console.log(convertToInteger("10011"));
console.log(convertToInteger("111001"));
console.log(convertToInteger("JamesBond"));



/*
  The parseInt() function parses a string and returns an integer.
  It takes a second argument for the radix, which specifies the
  base of the number in the string. The radix can be an integer between 2 and 36.
  The function call looks like:
        parseInt(string, radix);

        And here's an example:

        var a = parseInt("11", 2);

  The radix variable says that "11" is in the binary system,
   or base 2. This example converts the string "11" to an integer 3.

*/
