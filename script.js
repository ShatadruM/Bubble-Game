function MakeBubble(){
    var clutter = "";
for(var i = 0; i<56 ; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}

document.querySelector("#btm").innerHTML = clutter;
}

var timer = 60;
function runTimer(){
    timerInt = setInterval(function(){
        if(timer>0){
        timer --;
        document.querySelector("#timerCount").textContent = timer;
        }
        else{
            clearInterval(timerInt);
            document.querySelector("#btm").textContent= "GAME OVER";
            document.querySelector("#btm").style.fontSize = "50px";
            /*var yourScore = document.createElement("p");
            yourScore.textContent = "your score";
            document.querySelector("#btm").parentElement.appendChild(yourScore);
            */
        }
    },1000);
}
var rn = 0;
function changeHit(){
    rn = Math.floor(Math.random()*10);
    document.querySelector("#hit").textContent= rn;
}
var score = 0;
function ScorePts(){
    document.querySelector("#btm").addEventListener("click",function(dets){
        var clickednum = Number(dets.target.textContent)
        if(clickednum === rn){
            score += 10;
            document.querySelector("#score").textContent = score;
        }
        changeHit();
        MakeBubble();
    
    })
    

}

ScorePts();
changeHit();

runTimer();


MakeBubble();