let num = document.getElementById('number');
let buttonIncreased = document.getElementById('buttonIncreased');
let clicks = 0;

if(clicks === 0){
    num.style.color = "blue";
}


function buttonIncrease(){
    clicks++;
    num.innerHTML = clicks;
    color(clicks);
}

function buttonDecrease(){
    clicks--;
    num.innerHTML = clicks;
    console.log(clicks);
    color(clicks);
}

function buttonReset(){
    clicks = 0;
    num.innerHTML = 0;
    console.log(clicks);
    color(clicks);
}

function color(clicks){
    if(clicks === 0){
        num.style.color = "blue";
    }else if(clicks > 0){
        num.style.color = "green";
    }else{
        num.style.color = "red";
    }
}