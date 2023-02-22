const add = (first,second) =>first + second;
const getFullName = (first,last)=>first + '' +last ;
const multiply = (a,b) =>a * b;
const result = multiply(7 ,6);
console.log(result);

//no parameter arrow function
const getPie = ()=>3.1416;

//one perameter
const doubleText = (num) =>num *2;
//one perameter simple version
const fiveTimes = num =>num * 5;

//multi line arrow function
const doMath = (x,y,z) => {
    const firstSum = x + y ;
    const secondSum = y + z ;
    const multiplyResult = firstSum * secondSum ;
    const result = multiplyResult / 2 ;
    return result ; 
}