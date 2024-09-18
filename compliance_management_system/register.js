var fn=document.getElementById("fn");
var e=document.getElementById("e");
var p=document.getElementById("p");
var cp=document.getElementById("cp");
var phone=document.getElementById("phone");
var add=document.getElementById("add");
var city=document.getElementById("city");
var state=document.getElementById("state");
var btn=document.getElementById("btn");
var dfn=document.getElementById("dfn");
var email=document.getElementById("email");
var dpass=document.getElementById("dpass");
var cpass=document.getElementById("cpass");
var dphone=document.getElementById("dphone");
var dadd=document.getElementById("dadd");
var dcity=document.getElementById("dcity");
var dstate=document.getElementById("dstate");
var error=document.getElementById("error")

btn.addEventListener("click",change)



function change(){
    dfn.value=fn.value;
    email.value=e.value;
    dpass.value=p.value;
    if(p.value!==cp.value){
        error.innerText="password not correct";
    }
    cpass.value=cp.value;
    dphone.value=phone.value;
    dadd.value=add.value;
    dcity.value=city.value;
    dstate.value=state.value;

   

}

