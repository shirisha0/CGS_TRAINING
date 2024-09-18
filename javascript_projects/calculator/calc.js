var display=document.getElementById("display");
var btn=document.getElementsByClassName("btn");

for(let i=0;i<btn.length;i++){
    btn[i].addEventListener("click",expression);
}
function expression(e){
    var c= e.target;
    cr=c.innerText
    if (cr=="="){
        display.value=eval(display.value)
    }
    else if(cr=="AC"){
        display.value=null

    }
    else if(cr=="Back"){
        display.value=display.value.slice(0, -1)
    }
    else{
    display.value=display.value+cr;
    }
}