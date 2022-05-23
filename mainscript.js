let currVal="0";

function operate(){

    if(op==="+"){
        return add(a,b);
    }

    if(op==="-"){
        return sub(a,b);
    }

    if(op==="*"){
        return mul(a,b);
    }

    if(op==="/"){
        return divide(a,b);
    }

}   


function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}


let initVal=document.getElementById("numberDisplay");
let numOne=document.getElementById("nOne");
let numTwo=document.getElementById("nTwo");
let numThree=document.getElementById("nThree");
let numFour=document.getElementById("nFour");
let numFive=document.getElementById("nFive");
let numSix=document.getElementById("nSix");
let numSeven=document.getElementById("nSeven");
let numEight=document.getElementById("nEight");
let numNine=document.getElementById("nNine");
let numZero=document.getElementById("nZero");

numOne.addEventListener("click",()=>addNumber("1"));
numTwo.addEventListener("click",()=>addNumber("2"));
numThree.addEventListener("click",()=>addNumber("3"));
numFour.addEventListener("click",()=>addNumber("4"));
numFive.addEventListener("click",()=>addNumber("5"));
numSix.addEventListener("click",()=>addNumber("6"));
numSeven.addEventListener("click",()=>addNumber("7"));
numEight.addEventListener("click",()=>addNumber("8"));
numNine.addEventListener("click",()=>addNumber("9"));
numZero.addEventListener("click",()=>addNumber("0"));


function addNumber(clickedNum){
    if(currVal==="0"){
        currVal=clickedNum;
        initVal.textContent=`${currVal}`;
    }
    else{
        currVal+=clickedNum;
        initVal.textContent=`${currVal}`;
    }
}
