// task-1 start here
var burgerPrice = 600;

if (burgerPrice > 500 ){
    console.log("You will get cock free");
}else{
    console.log("You have to buy cock by 30 taka");
}
// task-2 start here
var bmi = 20;

if(bmi < 18.5){
    console.log("You are underweight");
}
else if(bmi >= 18.5 && bmi <= 24.9){
    console.log("You are normal");
}
else if(bmi >= 25 && bmi <= 29){
    console.log("You are overweight");
}
else{
    console.log("You are obese");
}
// task-3 start here

var studentMarks = 80;

if(studentMarks >= 0 && studentMarks <= 59){
    console.log("You are got 'F' Grade");
}
else if(studentMarks >= 60 && studentMarks <= 69){
    console.log("You are got 'D' Grade");   
}
else if(studentMarks >= 70 && studentMarks <= 79){
    console.log("You are got 'C' Grade");   
}
else if(studentMarks >= 80 && studentMarks <= 89){
    console.log("You are got 'B' Grade");   
}
else if(studentMarks >= 90 && studentMarks <= 100){
    console.log("You are got 'A' Grade");   
}
else{
    console.log("Not a valid Marks")
}