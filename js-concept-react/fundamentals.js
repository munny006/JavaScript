//how to declear a variable using let and const
const fathername = 'aram';
let reason = 'rainy';
season = 'winter';

//condition

if(fathername === 'Aram' ||season === 'rainy' ){

}
else if(fathername === 'aram' ){

}
else{

}


// array declear
const num1 = [66,78,90,64];

//index
//length
//push,indexof,
num1[0] = 90;

// for loop 

for(let i =0; i<num1.length ; i++){
    const num = num1[i];
    console.log(num);
}

//function

function add (a,b){
    const sum = a*b;
    return sum;
}
const output = add(6,6);
console.log(output)

//object
//access property by name
const student = {
    name:'munny',
    age : 32,
    movies : ['king khan','dhaka','maldal']

}
console.log(student.age);
console.log(student['age']);
