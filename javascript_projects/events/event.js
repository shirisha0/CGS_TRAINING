var output=document.getElementById("output");
var textarea=document.getElementById("textarea");
var submit=document.getElementById("button");

submit.addEventListener("click",change);
function change(){
    const c=textarea.value;
    output.innerText=c;

}