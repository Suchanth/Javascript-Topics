//Exception Handling
//Try,catch,throw,finally

//Example1

let num=prompt("Enter a Even Numbers");
try{
    if(num<0){
        throw new Error("Give a Positive Number");
    }
    else if(num%2==0){
        console.log("Given a Even number is: ",num);
    }
    else{
        console.log("Given number is Odd: ",num);
    }
}
catch(exp){
    console.log(exp.message);
}
finally{
    console.log("The Number is printed Successfully");
}

//Example 2
function myFunction(add1,add2){
    try{
        if(add1==undefined || add2==undefined){
            throw new Error("Invalid Arguments");
        }
        else{
            let value=add1+add2;
            console.log("The Addition of two numbers is: ",value);
        }
    }
    catch(exe){
        console.log(exe.message);
    }
    finally{
        console.log("The Program is executed successfully");
    }
}
myFunction(10,30);


//Example 3
function myEmployees(name,age){
    try{
        if(name==undefined || age==undefined){
            throw new Error("Invalid Arguments");
        }
        else if(age<18){
            throw new Error("The Employee is a child labour");
        }
        else{
            console.log("The Employee name is: "+name); 
            console.log("The Employee Age is: "+age);
        }
    }
    catch(exe){
        console.log(exe.message);
    }
    finally{
        console.log("The Employee Details executed successfully");
    }
}
myEmployees("Ramesh",14);