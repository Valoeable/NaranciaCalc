let initVal=0;

function operate(){
    let a=prompt("Select the first number:",0);
    a=parseInt(a);

    let b=prompt("Select the second number:",0);
    b=parseInt(b);

    let op=prompt("Select the operator:");

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

initVal=operate();

console.log(initVal);