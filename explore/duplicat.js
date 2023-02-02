const names = ['maliha','madiha','mariam','maria','maisha','mahu','mahmuda','mahi'];
function removeDuplicat(names)
{
    const unique =[];
    for(let i =0; i<names.length;i++){
        const name = names[i];
        console.log(name);
        if(unique.includes(name)=== false){
            unique.push(name);
        }
        
    }
    return unique;
}
const uni = removeDuplicat(names);
console.log(uni);