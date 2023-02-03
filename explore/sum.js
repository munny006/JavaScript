const shoppingCart = [
    {name:'shoe',price:1200},
    {name:'bag',price:3200},
    {name:'pant',price:4000},
    {name:'sharee',price:4500},
    {name:'shirt',price:4500},

];

function totalCart(products){
    let sum = 0;

    for(let i =0 ; i< products.length;i++){
        const product = products[i];
       //console.log(product);
        sum = sum + product.price;
        console.log(sum);
    }
    return sum;
}
const expense = totalCart(shoppingCart);
console.log(expense);