function val() {

// var 
   var name=document.getElementById("n1"); 
   var fname= document.getElementById("fn1"); 
   var email= document.getElementById("e1");
   var phone= document.getElementById("ph1");
   var adress= document.getElementById("ad1");
   var pass= document.getElementById("p1");
// var of eror
var eroname=document.getElementById("eron1"); 
   var erofname= document.getElementById("erofn1"); 
   var eroemail= document.getElementById("eroe1");
   var erophone= document.getElementById("eroph1");
   var eroadress= document.getElementById("eroad1");
   var eropass= document.getElementById("erop1");
   // name 
if(name.value=="")
{
  eroname.innerHTML="name is vide"; 
  return;
}  
var regname=/^[a-zA-Z]+$/g
if(regname.test(name.value)==false) 
{
    eroname.innerHTML="please don't use numbers or symbols ";
} 



         // full name
if(fname.value=="")
{
  erofname.innerHTML="name is vide"; 
  return;
}  
var regfname=/^[a-zA-Z]+$/g
if(regfname.test(fname.value)==false) 
{
    erofname.innerHTML="please don't use numbers or symbols ";
} 

  // email 
 var regemail =/^(\w{6})(\w*)@([a-zA-Z]{4,8}).([a-zA-Z]{3,4})$/g;
 if(regemail.test(email.value)==false)
 {
     eroemail.innerHTML="enter a valid email please" ;
 } 

 // phone 
 var regphone=/^(06)\d{8}$/g; 
 if(regphone.test(phone.value)==false)
 {
    erophone.innerHTML="please enter a valid phone";
 } 

 //adress 
    if(adress.value=="")
    {
        eroadress.innerHTML="please don't let adress vide"
    }

 // password 
 if(pass.value=="")
    {
        eropass.innerHTML="please don't let password vide"
    }


// end of fun
} 

function show() {

    var a= document.getElementById("more").style.display="block";
    var b=document.getElementById("bn12").style.display="none";
}

function hide() {

    var a= document.getElementById("more").style.display="none";
    var b=document.getElementById("bn12").style.display="block";
}