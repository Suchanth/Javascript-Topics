//addEventListener
var btnSubmit=document.querySelector("#btnSubmit");
var btnClear=document.querySelector("#btnClear");
btnSubmit.addEventListener("click" ,()=>{
var Uname=document.querySelector("#uname").value;
var Address=document.querySelector("#address").value;

var result1=document.querySelector("#result1");
var result2=document.querySelector("#result2");
result1.innerHTML="Username: "+Uname;
result2.innerHTML="Address: "+Address;
})