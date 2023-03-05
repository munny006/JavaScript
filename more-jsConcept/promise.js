const getData = new Promise((resolve,reject)=>{
    resolve(56665);
})
// console.log(getData + 1)
getData.then(data => console.log(data + 22))

//reject
const getReject = new Promise((resolve,reject)=>{
    const sum = Math.random()*10;
    console.log(sum);
    if(sum < 5){
        resolve(56665);
    }
    else{
        reject('No Data available');
    }
    
    
})
getReject
.then(data => console.log(data + 22))
.catch(err =>console.error('ERR : ',err))