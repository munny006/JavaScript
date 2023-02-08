/*gemsToDiamond */
function gemsToDiamond(person1,person2,person3){

   
   
    let firstPerson =person1 * 21 ;
    let secondPerson =person2 * 32 ;
    let thirdPerson =person3 * 43 ;
     let total = firstPerson + secondPerson + thirdPerson ;
   
     if(total > (1000) * 2){

       const num =  total - 2000 ;
       console.log(num);
       
   }
   else{
    console.log(total);
   }


}
gemsToDiamond(1,1,1);


