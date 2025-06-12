function getcomputerchoice(){
    let a= Math.floor(Math.random()*3);
    if(a===0){
        return "rock";
    }
    else if(a===1){
        return "paper";
    }
    else if(a===2){
        return "scissor";
    }
}
function gethumanchoice(){
    let b=prompt("enter your choice: ");
    return b;
}
var humanscore=0;
var computerscore=0;
function playround(humanchoice,computerchoice){
    console.log(`Human: ${humanchoice}, Computer: ${computerchoice}`);
    if (humanchoice=='rock' && computerchoice=='paper'){
        computerscore++;
    }
    else if(humanchoice=='paper' && computerchoice=='scissor'){
        computerscore++;
    }
    else if(humanchoice=='scissor' && computerchoice=='rock'){
        computerscore++;
    }
    else if (computerchoice=='rock' && humanchoice=='paper'){
        humanscore++;
    }
    else if(computerchoice=='paper' && humanchoice=='scissor'){
        humanscore++;
    }
    else if(computerchoice=='scissor' && humanchoice=='rock'){
        humanscore++;
    }
    else{
        console.log("It' a tie!!");
    }
}
for(let i=0;i<4;i++){
    const humanselection = gethumanchoice();
    const computerselection = getcomputerchoice();
    playround(humanselection, computerselection);
}
if(humanscore>computerscore){
    console.log("Human wins!!!!");
}
else{
    console.log("computer wins!!!");
}