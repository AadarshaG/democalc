
let screen = document.querySelector('.screen');

let calculate = (number)=>{
    screen.value += number;
}

let result=()=>{
    try{
        screen.value = eval(screen.value);
    }
    catch(err){
        screen.value = " ";
    }
}

function clr(){
    screen.value = " ";
}

function dell(){
    screen.value = screen.value.slice(0,-1);
}