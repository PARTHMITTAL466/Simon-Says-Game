let user_seq = [];
let game_seq = [];

let btncolor = ["yellow" , "red" , "green" , "purple"];

let h2 = document.querySelector("h2");
let start = false;
let level = 0 ;
document.addEventListener("keypress" , function(){
    if(start === false)
        console.log("game is started:");
        start = true;
        levelup();
 });

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
 }

 function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
 }

function levelup(){
    user_seq = [];  
    level++;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random() * 4);
    let randColor = btncolor[randidx];
    let randbtn = document.querySelector(`.${randColor}`);
    game_seq.push(randColor);
    console.log(game_seq);
    gameFlash(randbtn);
 }

 function checkans(idx){
    // console.log("curr level:",level);
    
    if(user_seq[idx] === game_seq[idx])
    {   
        if(user_seq.length == game_seq.length){
            setTimeout(levelup , 1000);
        }
    }else{

        h2.innerHTML=`game over!your score is:<b>${level}</b><br> press any key to start the game`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor= "white";
        }, 150);
    reset();
}
 }
 function btnpress(){
    let btn = this;
    userflash(btn);
    userColor = btn.getAttribute("id");
    user_seq.push(userColor);
    console.log(userColor);
    checkans(user_seq.length-1);
 }

 let allbtns = document.querySelectorAll(".btn");
 for(btn of allbtns){
    btn.addEventListener("click" , btnpress);
 }
 

function reset(){
    start = false;
    game_seq = [];
    user_seq = [];
    level = 0;
}
