//callback function
//The callback function is the function passed  an argument to the another function is called callback function
//Javascript is a synchronous and single threaded language.It can do only one at a time in a specific order.


//Example1
function hello(callback){
        console.log("Hello");
        callback();
}
function wait(){
    console.log("Wait");
}
function leave(){
    console.log("Leave");
}
function goodbye(){
    console.log("Good Bye!");
}
hello(wait);

//Example2

sum(display,20,30)

function sum(callback,x,y){
    let result=x + y;
    console.log(result);
    callback(result);
}
function myDisplay(result){
    console.log(result);
}
function display(result){
    document.getElementById("myH1").textContent=result;
}

//Example 3
//Example 2
function Sum(value1,value2,value3,callback){
    let add=value1+value2+value3;
    callback(add);
}
function Display(add){
    
    document.write("<h1> Sum  ->" + add + "</h1>");
}
Sum(45,45,34,Display);