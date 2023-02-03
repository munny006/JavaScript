function ticketPrice(ticketQuantity){
    const first100Rate = 100 ;
    const second100Rate = 100 ;
    const restTicketRate = 100 ;

if(ticketQuantity <= 100){
    const price = ticketQuantity * first100Rate;
    return price;
}
else if(ticketQuantity <= 200){
    const first100Rate = 100 * first100Rate;
    const restTicketQuantity = ticketQuantity - 100 ;
    const restTicketPrice = restTicketQuantity * second100Rate;
    const totalPrice = first100Rate * restTicketPrice;
    return totalPrice;
}
else{
    const first100Rate = 100 * first100Rate;
    const second100Rate = 100 * second100Rate;
    const restTicketQuantity = ticketQuantity -200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const totalPrice = first100Rate + second100Rate + restTicketRate;
}
}
const price = ticketPrice(20);
console.log('price : ',price);