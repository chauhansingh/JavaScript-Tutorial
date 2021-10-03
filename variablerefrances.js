// variable refrance allocation or memory allocation
var o1={o2:{x:1}};
console.log(o1);
console.log(typeof o1);
var o3 = o1;
console.log(o3);
console.log(typeof o3);
o1=1;
console.log(o1);
console.log(typeof o1);
var o4=o3.o2;
console.log(o4);
console.log(typeof o4);
o3='374';
console.log(o3);
console.log(typeof o3);
o4=null;
console.log(o4);
console.log(typeof o4);
