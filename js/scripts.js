
function myApp(){


var yy =document.getElementById("ye").Value;
 
 var calcCc= ((yy-1)/100);
 var nad=math.ceil(calcCc);

var cc=document.getElementById("ce").Value;

var mm = document.getElementById("mo").Value;

var dd =document.getElementById("da").Value;
 var ff= document.getElementById("fi").Value;
 var ll= document.getElementById("la").Value;
 console.log(cc+mm+dd);
 var gender=prompt("Enter the gender:");
 
var calcDay = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7;
var n= calcDay.toFixed(0);
var num=n;
var names=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",
"Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]
//var number =[0,1,2,3,4,5,6]
if (num== 0 && gender=="male") {
document.getElementById("get").innerHTML=names[0];
}
else if (num ==1  && gender=="male") {
document.getElementById("get").innerHTML =names[1];
}else if (num == 2 && gender=="male") {
document.getElementById("get").innerHTML= names[2];
}else if (num == 3 && gender=="male") {
document.getElementById("get").innerHTML=names[3];
}else if (num == 4 && gender=="male") {
document.getElementById("get").innerHTML=names[4];
}else if (num == 5 && gender=="male") {
document.getElementById("get").innerHTML=names[5];
}else if (num == 6 && gender=="male") {
document.getElementById("get").innerHTML=names[6];
}
if (num== 0 && gender=="female") {
document.getElementById("get").innerHTML=names[7];
}
else if (num == 1 && gender=="female") {
document.getElementById("get").innerHTML=names[8];
}else if(num == 2 && gender=="female") {
document.getElementById("get").innerHTML=names[9];
}else if (num == 3 && gender=="female") {
document.getElementById("get").innerHTML=names[10];
}else if (num == 4 && gender=="female") {
document.getElementById("get").innerHTML=names[11];
}else if (num == 5 && gender=="female") {
document.getElementById("get").innerHTML=names[12];
}else if (num == 6 && gender=="female") {
document.getElementById("get").innerHTML=names[13];
}
}


