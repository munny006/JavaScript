function WoodCalculate(Chair,Table,Bed){
    const perChair = 3;
    const perTable = 10;
    const perBed = 50;
    const ChairWood = Chair * perChair;
    const TableWood = Table * perTable;
    const BedrWood = Bed * perBed;

    const totalWood = ChairWood + TableWood + BedrWood;
    return totalWood ; 

}
const totalWood = WoodCalculate(1,1,1);
console.log(totalWood);
