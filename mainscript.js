//Helper variables

let currVal="0",operator="NONE",a=0,b=0,fStart=0;

//Main calculator functions

function operate(op){
    if(currVal==="0"){
        initVal.textContent="ERROR";
        return;
    }

    b=!Number.isInteger(currVal)?parseFloat(currVal):parseInt(currVal);

    if(op==="+"){
        currVal=add(a,b);
        currVal=!Number.isInteger(currVal)?Math.round(currVal*100)/100:currVal;
        initVal.textContent=`${currVal}`;
        operator="NONE";
        fStart=1;
    }

    if(op==="-"){
        currVal=sub(a,b);
        currVal=!Number.isInteger(currVal)?Math.round(currVal*100)/100:currVal;
        initVal.textContent=`${currVal}`;
        operator="NONE";
        fStart=1;
    }

    if(op==="*"){
        currVal=mul(a,b);
        currVal=!Number.isInteger(currVal)?Math.round(currVal*100)/100:currVal;
        initVal.textContent=`${currVal}`;
        operator="NONE";
        fStart=1;
    }

    if(op==="/"){
        currVal=divide(a,b);
        currVal=Math.round(currVal*100)/100;
        initVal.textContent=`${currVal}`;
        operator="NONE";
        fStart=1;
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

//Initialization of buttons

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
let pOp=document.getElementById("plus");
let mOp=document.getElementById("minus");
let mulOp=document.getElementById("mul");
let divOp=document.getElementById("dvd");
let equal=document.getElementById("eq");
let clear=document.getElementById("clr");
let del=document.getElementById("delete");
let dec=document.getElementById("decimal");

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
pOp.addEventListener("click",()=>opChoice("+"));
mOp.addEventListener("click",()=>opChoice("-"));
mulOp.addEventListener("click",()=>opChoice("*"));
divOp.addEventListener("click",()=>opChoice("/"));
eq.addEventListener("click",()=>operate(operator));
clear.addEventListener("click",()=>clearAll());
del.addEventListener("click",()=>delNum());
dec.addEventListener("click",()=>addDecDot());

pOp.disabled=true;
mOp.disabled=true;
mulOp.disabled=true;
divOp.disabled=true;


//Selection section

function addNumber(clickedNum){

    if(fStart===1&&operator==="NONE"){
        currVal="0";
        fStart=0;
    }

    if(currVal!="0"){
        currVal+=clickedNum;
        initVal.textContent=`${currVal}`;
    }

    if(currVal==="0"){
        pOp.style.backgroundColor="black";
        mOp.style.backgroundColor="black";
        mulOp.style.backgroundColor="black";
        divOp.style.backgroundColor="black";
        currVal=clickedNum;
        initVal.textContent=`${currVal}`;
        pOp.disabled=false;
        mOp.disabled=false;
        mulOp.disabled=false;
        divOp.disabled=false;
    }
    
}

function delNum(){
    if(currVal.length===1){
        currVal="0";
        initVal.textContent=`${currVal}`;
    }
    else{
        currVal=currVal.slice(0,currVal.length-1);
        initVal.textContent=`${currVal}`;
    }

}

function addDecDot(){
    currVal+=".";
    initVal.textContent=`${currVal}`;
    dec.disabled=true;
}

function opChoice(opChosen){

    if(opChosen==="+" && operator==="NONE"){
        pOp.style.backgroundColor="rgb(247, 63, 63)";
        operator="+";
        a=!Number.isInteger(currVal)?parseFloat(currVal):parseInt(currVal);
        currVal="0"
        dec.disabled=false;
        return;
    }
    

    if(opChosen==="-" && operator==="NONE"){
        mOp.style.backgroundColor="rgb(247, 63, 63)";
        operator="-";
        a=!Number.isInteger(currVal)?parseFloat(currVal):parseInt(currVal);
        currVal="0"
        dec.disabled=false;
        return;
    }
   

    if(opChosen==="*" && operator==="NONE"){
        mulOp.style.backgroundColor="rgb(247, 63, 63)";
        operator="*";
        a=!Number.isInteger(currVal)?parseFloat(currVal):parseInt(currVal);
        currVal="0"
        dec.disabled=false;
        return;
    }
   
    if(opChosen==="/" && operator==="NONE"){
        divOp.style.backgroundColor="rgb(247, 63, 63)";
        operator="/";
        a=!Number.isInteger(currVal)?parseFloat(currVal):parseInt(currVal);
        currVal="0"
        dec.disabled=false;
        return;
    }
   
    if(opChosen==="+" && operator!="NONE"){
            operate(operator);
            operator="+";
            a=!Number.isInteger(currVal)?parseFloat(currVal):parseInt(currVal);
            pOp.style.backgroundColor="rgb(247, 63, 63)";
            mOp.style.backgroundColor="black";
            mulOp.style.backgroundColor="black";
            divOp.style.backgroundColor="black";
            currVal="0"
            dec.disabled=false;
            return;
    }

    if(opChosen==="-" && operator!="NONE"){
        operate(operator);
        operator="-";
        a=!Number.isInteger(currVal)?parseFloat(currVal):parseInt(currVal);
        pOp.style.backgroundColor="black";
        mOp.style.backgroundColor="rgb(247, 63, 63)";
        mulOp.style.backgroundColor="black";
        divOp.style.backgroundColor="black";
        currVal="0"
        dec.disabled=false;
        return;
    }

    if(opChosen==="*" && operator!="NONE"){
        operate(operator);
        operator="*";
        a=!Number.isInteger(currVal)?parseFloat(currVal):parseInt(currVal);
        pOp.style.backgroundColor="black";
        mOp.style.backgroundColor="black";
        mulOp.style.backgroundColor="rgb(247, 63, 63)";
        divOp.style.backgroundColor="black";
        currVal="0"
        dec.disabled=false;
        return;
    }

    if(opChosen==="/" && operator!="NONE"){
        operate(operator);
        operator="/";
        a=!Number.isInteger(currVal)?parseFloat(currVal):parseInt(currVal);
        pOp.style.backgroundColor="black";
        mOp.style.backgroundColor="black";
        mulOp.style.backgroundColor="black";
        divOp.style.backgroundColor="rgb(247, 63, 63)";
        currVal="0"
        dec.disabled=false;
        return;
    }

}

function clearAll(){
    currVal="0",operator="NONE",a=0,b=0,fStart=0;
    initVal.textContent=`${currVal}`;
}