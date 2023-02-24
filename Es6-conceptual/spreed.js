const number = [2,4,1,9,3,5,26,7];
const number2 = [32,45,67];
console.log(Math.min(...number));

//push kora
const newArray = [123,12,22,21,...number2];
console.log(newArray);
const x =5 ;
const y = x;
console.log(x);
console.log(5);

//array disstructing

const arra =[3,4,5,12,43,53,55,89,78];
const [first,second,...remaining] = arra ;
console.log(first,second);
console.log(remaining);