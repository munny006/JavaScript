const student = {
    name:'munny',
    age : 32,
    movies : ['king khan','dhaka','maldal']

};

const about = `My name is ${student.name}`;
console.log(about);

//arrow function

const getFifty = () => 55;
const addSix = number => number + 65 ;
const isEven = x => x%2 == 0;
const addThree = (x,y,z) => x + y + z;
const doMath = (num1,num2) =>{
    const sum = num1 + num2 ;
    return sum ;
}

//spreed 
const num1 = [66,78,90,64];
const newNumbers =num1;
num1.push(88);

console.log(newNumbers)
