const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const student ={
    id : 121,
    class : 11 ,
    name :'Agun'
};
const friends = [11,14,13,15,88];
console.log(typeof country);
console.log(typeof age);
console.log( typeof isIndependent);
console.log( typeof student);

 function add (num1,num2){
    return num1 + num2 ;
 }

 console.log(typeof add);

 console.log(Array.isArray(friends));
 
 //concat

 const newFrindAge = [12,37,86,47];
 const allFriend   = newFrindAge.concat(friends);
 console.log(allFriend);