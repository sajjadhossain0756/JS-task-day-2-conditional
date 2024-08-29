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
// task-4 start here

var myMarks = 81;
var friendMarks = 70;

if(myMarks > 80){
    if(friendMarks > 80){
        console.log("let's go for a lunch");
    }
    else if(friendMarks <= 80 && friendMarks >= 60){
        console.log("good luck next time");
    }
    else if(friendMarks < 60 && friendMarks >= 40){
        console.log("Your massage will stay unseen");
    }
    else if(friendMarks < 40){
        console.log("You are block");
    }
    else{
        console.log("Not a valid Marks");
    }
}
else{
    console.log("go to home and sleep and act sad");
}
// task-5 start here

var num1 = 20;
var num2 = 40;
var result;

if(num1 > num2){
    result = num1 * 2;
    console.log(result);
}
else{
    result = num1 + num2;
    console.log(result);
}
// tarnary operator
 result = num1 > num2 ? console.log(num1 * 2) : console.log(num1 + num2);
 
