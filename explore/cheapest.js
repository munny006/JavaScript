const phones =[
  {name:'Samsung', camera:12, storage:'32gb', price:34000},
  {name:'oppo',camera:3, storage:'32gb', price:23000},
  {name:'xamomi',camera:10, storage:'12gb', price:30000},
  {name:'iphone',camera:164, storage:'32gb', price:134000},
  {name:'Htp',camera:67, storage:'32gb', price:14000},
  {name:'blackbary',camera:9, storage:'32gb', price:44000},
];

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i< phones.length; i++){
        const phone = phones[i];
        if(phone.camera < cheapest.camera){
        cheapest = phone;
    }
}
return cheapest;
}
const mySection = cheapestPhone(phones);
console.log(mySection);
