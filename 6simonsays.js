let gameseq = [];
let userseq = [];

let started = false;
let level = 0;
let btns = ["yellow","red","green","blue"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress",()=>{
    if (started==false){
        console.log("game has started");
        started = true;
        levelup();
    }
})

function gameflash(btn){
    //btn=this;
    btn.classList.add("flash");
    setTimeout(()=>{
        btn.classList.remove("flash")
    },250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(()=>{
        btn.classList.remove("userflash")
    },250);
}

function checkans(idx){
     if (userseq[idx]==gameseq[idx]){
        if (userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
     }
     else{
        h2.innerHTML =  `Game Over! Your score was <b>${level}</b> <br> Press any key to restart.`;
        reset();
     }
}

function levelup(){
    userseq=[];
    level++;
    h2.innerText = `level ${level}`;

    //choosing random button
    let randind = Math.floor(Math.random()*4);
    let randclr = btns[randind];
    let randbtn = document.querySelector(`.${randclr}`);
    gameseq.push(randclr);
    console.log(gameseq);
    gameflash(randbtn);
}


function btnpress(){
    let btn = this;
    userflash(btn);

    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);
    //console.log(usercolor); 
    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for (btn of allbtns){
    btn.addEventListener("click",btnpress);
} 

function reset(){
    started = false;
    gameseq=[];
    userseq=[];
    level=0;
}