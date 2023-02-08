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
 

