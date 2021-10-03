/* if we start concatenation with string letaral then plus sign (+)
treats as concatenation and for any other aurthamatic oprations 
like minus(-),multyply(*),divition(/) string converts into number
and purforms opration.
*/
console.log(1+'st'+'rank');
console.log(1+1);
console.log('1'+1);
console.log('1'+1-1);
console.log('1'+1+1);
console.log('1'+2*10);
console.log('12'*10);
console.log('1'+20/5);
console.log('1'+20+5);
console.log(10+10+'1'-1);

console.log(typeof (1+'st'+'rank'));
console.log(typeof (1+1));
console.log(typeof ('1'+1));
console.log(typeof ('1'+1-1));
console.log(typeof ('1'+1+1)); //
console.log(typeof ('1'+2*10));
console.log(typeof ('12'*10));
console.log(typeof ('1'+20/5));
console.log(typeof ('1'+20+5));
console.log(typeof (10+10+'1'-1));
