let card1=8;
let card2=11;
let cards=[card1,card2];
let sum=card1+card2;
isBlackjack=true;
let message="";
isAlive=true;
let SumEl=document.getElementById("sum-el");
let messageEl=document.getElementById("message-el");;
let cardsEl=document.querySelector("#cards-el");

function startGame(){
    renderGame();
}
 function renderGame(){
    cardsEl="Cards: ";
    for(let i=0;i<cards.length;i++){
        cardsEl.textContent+=cards[i]+" ";
    }
    
     SumEl.textContent+=sum;

    if(sum<=20){
        message="do you want new Card?";
      
    }
    else if(sum===21){
        message="Wooh! You got BlacJack";
        console.log(message);
    }
    messageEl.innerText=message;
      
};
function newCard(){
    let newcard=5;
    cards.push(newcard);
    sum+=cards[2];
    console.log("hi")
       cardsEl.innerText="cards:"+cards[0]+" "+cards[1]+" "+cards[2];
     SumEl.textContent="Sum:"+sum;

    if(sum<=20){
        message="do you want a new Card?";
      
    }
    else if(sum===21){
        message="Wooh! You got BlacJack";
        console.log(message);
    }
    else{
        message="Game Over! You are out of the game";
        isAlive=false;
    }
    messageEl.innerText=message;
}
