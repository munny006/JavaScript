/* mindGame */

/* First take a number, multiply the number by 3, then add it to 10, divide it by 2, subtract it by 5 and the result will give me the output. */

function mindGame(num){
     if(typeof num!== 'number'){
         return 'please enter a number';
    }
    //console.log(num);
    let num1 = num*3;
    
    let num2 = num1+10;
    
    let num3 = num2 / 2;
    
    let num4 = num3 - 5 ;

   return num4;
    

}
mindGame(50);

 /*evenOdd*/

  /* First checking the entire text, then checking the entire text, after checking if it is even then it will show even otherwise it will show odd.*/

  function evenOdd(text){
    if(typeof text!== 'string'){
        return 'please enter a string';
    }
    //console.log(text);
    let sum = 0;
    for(let i = 0 ; i < text.length; i++){
        const strings = text[i];
       
        sum = sum + 1;
       // console.log(sum);

    }

    if(sum % 2 == 0)
    
       {
         console.log('even');
       }
    
    else{
        console.log('odd');
    
    }
    

}
evenOdd('Batch7');



/* isLGSeven */
/* First take a number, then check if the number is smaller than 7, if it is smaller, then subtract 7 from the number, and if not, double the number. */

function isLGSeven(num){

    if(typeof num!== 'number'){
        return 'please enter a number';
    }
    console.log(num);
    if(num < 7){

        const number =  num - 7 ;
        //console.log(number)
    }
    
    else{
        const num1 = num * 2
        //console.log(num1);
    }
   
    

}
isLGSeven(15);

/* findingBadData */
/* First checking the entire text, then checking the entire text, after checking if it is even then it will show even otherwise it will show odd. */


function findingBadData( numbers ) {
    if(typeof numbers!== 'number'){
      return 'please enter a number';
  }
    
  let  negativeCount = 0;
  
  
    for(let i = 0; i < numbers.length; i++) {
      if(numbers[i] < 0){
        negativeCount++;
  
    }
  }
    return negativeCount;
    
   
  }
  
  let numbers= [-1,-6,1,-4,-10];
  //let counts = findingBadData(numbers);
  //console.log(counts);
  findingBadData();

 
/*gemsToDiamond */
/* We multiply the 1st person's diamond by 21, the 2nd person's diamond by 32, the 3rd person's diamond by 43 and check the total diamond by condition that it is not more than 2 times 1000. And if it is small then it will give total output */
function gemsToDiamond(person1,person2,person3){

   
   
    let firstPerson =person1 * 21 ;
    let secondPerson =person2 * 32 ;
    let thirdPerson =person3 * 43 ;
     let total = firstPerson + secondPerson + thirdPerson ;
   
     if(total > (1000) * 2){

       const num =  total - 2000 ;
       //console.log(num);
       
   }
   else{
    //console.log(total);
   }


}
gemsToDiamond(1,1,1);



   
  
  

