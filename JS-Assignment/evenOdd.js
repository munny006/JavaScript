/*evenOdd*/

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
/*
Input: ‘Phero’

Output: odd



Input: ‘Batch7’

Output: even



Input: ‘chatgpt’

Output: odd
*/