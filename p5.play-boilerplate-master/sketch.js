function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  //string data type
  var name="siddharth"
  console.log(name)

//number datatype
  var grade=8
  console.log(grade)
grade=grade+1
console.log("grade after increment="+grade)

//string datatype
var marks="80"
marks=marks+5
console.log("marks after increment="+marks)

//boolean datatype can be true or false  
var abc=true 
console.log(abc);

//null
 var obj=null
 console.log(obj)
 
 //undefined 
 var object;
 
 console.log(object)

var myname="siddharth"
console.log("there are "+myname.length+" letters in the stirng myname ")

console.log(myname.toUpperCase())

//convert a string into number 
marks="2"
marks=parseInt(marks)
marks=marks+1
console.log(marks)

//arithmetic opreters(+,-,*,/,%)
var num=22
console.log(num/5)
console.log(num%5)

//condition
if(1>2){
	console.log("Happy")
}
else{
	console.log("Not Happy")
}

//switch statement
var name = "siddharth";

switch(name) {  
case  "siddharthh":  
console.log("Condition 1");  
break; 

case  "siddharthhh":  
console.log("Condition 2");  
break; 

default:  
console.log("None of the conditions are true");
}

//forloop intialization,condition,increment or decrement
for(var i=0; i<=5; i++){
	console.log(i)
}
//0
//1
//2
//3
//4
//5

//array it can contain multiple datatypes[]
var friends = ["friend1","friend2","friend3",29,false]
console.log("length of the array ="+friends.length)
console.log("first element of the array is "+friends[0])
console.log("second element of the array is "+friends[1])
console.log(friends)
}

function draw() {
  background(255,255,255);  
  drawSprites();

}