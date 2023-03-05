console.log(1);
console.log(2);

// fetch(`https://jsonplaceholder.typicode.com/tools/1`)
// .then(response =>response.json())
// .then(json => console.log(json))
setTimeout(doSomething,4000)
console.log(4);
console.log(4);
function doSomething(){
    console.log(3);
}