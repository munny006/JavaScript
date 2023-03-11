const addProduct = () => {
    const productField = document.getElementById('product-name') ;
    const quantityField = document.getElementById('product-quantity') ;
    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';
    console.log(product,quantity);
    displayProduct(product,quantity);
    saveProductToLocalStorage(product,quantity);
}
const displayProduct = (product,quantity) =>{
    const ul = document.getElementById('product-container')
    const li = document.createElement('li')

  
    li.innerText = `${product} : ${quantity}
  `;
   
    ul.appendChild(li);
}
//store data in localstorage
const getStoredShoppingCart = () =>{
    let cart = {};
    const storedcart = localStorage.getItem('cart');
   
    if(storedcart){
        cart = JSON.parse(storedcart);
    }
    return cart;
}
//save data in localstorage
const saveProductToLocalStorage = (product,quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
   const cartStringified = JSON.stringify(cart);
   localStorage.setItem('cart',cartStringified)
}

//showdata

const displayProductFromLocalStorage = () =>{
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product,quantity);
        displayProduct(product,quantity)
    }
}
displayProductFromLocalStorage();