let text = document.getElementById('h1');

let colorSimple = ["blue", "red", "green", "yellow", "white", "brown",
"orange", "purple", "cyan", "violet"];
let colorHex = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

let boja = "";
let number = 0;

function colorSwapperSimple(){
    number = Math.floor(Math.random() * 10);
    document.body.style.backgroundColor = colorSimple[number];
    text.innerHTML = "Color Flipper : " + colorSimple[number];
}

function colorSwapperHex(){
    bojaz = colorMaker(boja);
    document.body.style.background = bojaz;
    text.innerHTML = "Color Flipper : " + bojaz;
    boja = "";
}

function colorMaker(){
    for(let i = 0 ; i <= 5 ; i++){
        number = Math.floor(Math.random() * 15);
        boja = boja + colorHex[number];
    }
    return "#" + boja;
}

function colorSwapperSimpleHex(){
    let a = Math.floor((Math.random() * 2)+1);
    if(a === 1){
        colorSwapperSimple();
    }else{
        colorSwapperHex();
    }
}

