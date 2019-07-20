
function myApp(){

var ff= document.getElementById("fi").value;
var ll= document.getElementById("la").value;
var cc=document.getElementById("ce").value;
var yy =document.getElementById("ye").value;
var mm = document.getElementById("mo").value;
var dd =document.getElementById("da").value; 

 var gende=document.getElementById("ma", "fe").value;
 
var calcDay = (((cc/4) -2*cc-1 )+ ((5*yy/4 )) + ((26*(mm+1)/10)) + dd )%7
var num= calcDay.toFixed(0);

var names=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",
"Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

if (num== 0 && gende=="male") {
document.getElementById("get").innerHTML=names[0];
}
else if (num ==1  && gende== "male") {
document.getElementById("get").innerHTML =names[1];
}else if (num == 2 && gende == "male") {
document.getElementById("get").innerHTML= names[2];
}else if (num == 3 && gende=="male") {
document.getElementById("get").innerHTML=names[3];
}else if (num == 4 && gende=="male") {
document.getElementById("get").innerHTML=names[4];
}else if (num == 5 && gende=="male") {
document.getElementById("get").innerHTML=names[5];
}else if (num == 6 && gende=="male") {
document.getElementById("get").innerHTML=names[6];
}


else if (num== 0 && gende=="female") {
document.getElementById("get").innerHTML=names[7];
}
else if (num == 1 && gende=="female") {
document.getElementById("get").innerHTML=names[8];
}else if(num == 2 && gende=="female") {
document.getElementById("get").innerHTML=names[9];
}else if (num == 3 && gende=="female") {
document.getElementById("get").innerHTML=names[10];
}else if (num == 4 && gende=="female") {
document.getElementById("get").innerHTML=names[11];
}else if (num == 5 && gende=="female") {
document.getElementById("get").innerHTML=names[12];
}else if (num == 6 && gende=="female") {
document.getElementById("get").innerHTML=names[13];
}
return names;
}




