const user = {
    id:1,
    name:'Gorib ahmed',
    job:'actor'
};

//javascript object notation json
const stringified = JSON.stringify(user);
console.log(user);
console.log(stringified);

const shop = {
    ower: 'Alia',
    address:{
        street:'chhatak',
        city:'ranibag',
        country:'BD'
    },
    products:['laptop','MIC','monitor','keyboard'],
    revenue:59000,
    isOpen:true,
    isNew:false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj);