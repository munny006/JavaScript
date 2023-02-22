//global scope
let name = 'munny';
let isFemale = true;
//local scope
function add(){
    let a = 5;
    return a;
}
add();
//block scope
{
let roll = 123
console.log(roll);
}