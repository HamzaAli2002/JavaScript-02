// 1> User age equal to 20...

var userAge = 20;
if(userAge = 20){
    console.log("ALLOW")
}else{
    console.log("NOT ALLOW")
}



// 2> User gender equal to male...

var userGender = "male"
if(userGender == "male"){
    console.log("ALLOW")
}else{
    console.log("NOT ALLOW")
}



// 3> User age value => data type number...

var userAge = 20;

if(userAge == 20){
    console.log("ALLOW")
}else{
    console.log("NOT ALLOW")
}



// 4> User age greater then 20...

var userAge = 70;

if(userAge >20){
    console.log("ALLOW")
}else{
    console.log("NOT ALLOW")
}



// 5> User age greater then and equal to 20...

var userAge = 22;
if(userAge >=20){
    console.log("ALLOW")
}else{
    console.log("NOT ALLOW")
}



// 6> User age greater then and equal to 18 && user age less then and equal to 40...

var userAge = 40;
if(userAge >=18 && userAge <=40){
    console.log("ALLOW")
}else{
    console.log("NOT ALLOW")
}



// 7> User age greater then and equal to 18 || user age less then and equal to 40...

var userAge = 41;
if(userAge >=18 || userAge <=40){
    console.log("ALLOW")
}else{
    console.log("NOT ALLOW")
}



// 8> User age greater then and equal to 18 and gender equal to male OR female...

var userAge = 18;
var userGender = "male";
if (userAge >=18 && userGender === "male"){
    console.log("ALLOW")
}else{
    console.log("NOT ALLOW")
}