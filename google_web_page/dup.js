var e=document.getElementById("email");
var p=document.getElementById("pass");
var btn=document.getElementById("btn");
var dis=document.getElementById("dis");
btn.addEventListener("click",display);
function display(){
    var ce=e.value;  
    var cp=p.value;
    console.log(dis)
    dis.innerText=ce ;
    dis.innerText=cp;
}


