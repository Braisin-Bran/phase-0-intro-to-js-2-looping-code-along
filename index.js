// Code your solutions in this file
const names= ["Charlie", "Samip", "Ali"];
function writeCards(names){
    const cards=[];
    for(let i=0;i<names.length;i++){
    cards.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return cards;
}
function countDown(startingNum){
    for(let i =startingNum;i>=0;i--){
        console.log(i);
    }
}