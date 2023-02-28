let first ;
console.log(first);// ans : undefine

function second(a,b){
    const total = a + b;
}
second(); // result= undefine

function third(a,b,c,d){
    const result = a + b + c + d;
    console.log(a,b,c,d);
}
third(5,7); // result : 5,7 undefine unefine

function noNegetive(a,b){
    if(a < 0 || b< 0 ){
        return
    }
   return a + b;
}
 const no = noNegetive(2,5); // value - dile undefine hobe
 console.log(no);