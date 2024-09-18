/*function ins1(){
    var score1=document.getElementById("s1");
    var currentvote=parseInt(score1);
    console.log(currentvote);
    //score1.innerText=currentvote+1;
}
var btn1=document.getElementById("btn1");
btn1.addEventListener("click",ins1);*/
var btn1 =document.getElementById("btn1");
var btn2 =document.getElementById("btn2");
var btn3 =document.getElementById("btn3");
var btn4 =document.getElementById("btn4");

function incremnetscore(e){
    var button = e.target
    var sid = button.getAttribute("ds");
    //console.log(sid)
    var score=document.getElementById(sid);
    //console.log(score)
    var currentscore=parseInt(score.innerText);
    score.innerText=currentscore+1;
}
btn1.addEventListener("click",incremnetscore);
btn2.addEventListener("click",incremnetscore);
btn3.addEventListener("click",incremnetscore);
btn4.addEventListener("click",incremnetscore);
function endgame(){
    var s1=parseInt(document.getElementById("s1").innerText);
    var s2=parseInt(document.getElementById("s2").innerText);
    var s3=parseInt(document.getElementById("s3").innerText);
    var s4=parseInt(document.getElementById("s4").innerText);
    if(s1>s2 && s1>s3 && s1>s4){
        console.log(s1)
        alert("BRS")
    }
    else if(s2>s1 && s2>s3 && s2>s4){
        console.log(s1)
        alert("congress")
    }
    else if(s3>s1 && s3>s2 && s3>s4){
        console.log(s1)
        alert("Bjp")
    }
    else{
        console.log(s4)
        alert("cp")
    }
}
