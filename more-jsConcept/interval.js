console.log(1)
console.log(2)
let num = 0;
const interValid = setInterval(()=>{
    console.log(++num)
    if(num === 10){
        clearInterval(interValid);
    }
},1000)
console.log(4)
console.log(5)
