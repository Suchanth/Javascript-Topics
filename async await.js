//Asynchronous Await
//Asynchronous-The async keyword transforms a regular javascript function to an asynchronous function causing to return a promise.
//Await-The await keyword used inside to the async function to pause its execution and wait for a promise to resolve before continuing.
let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let users={Uname:"Ramesh",Role:"Developer"};
        if(Object.keys(users)!==0){
            resolve(users);
        }else{
            reject(users);
        }
    },1000)
});
async function getName(){
    let user=await promise;
    console.log(user);
    console.log("User Name is: "+user.Uname);
    console.log("The Role is: "+user.Role);
}
getName().then(()=>{
    console.log("The Program is executed successfully");
}).catch(()=>{
    console.log("The Program is not executed")
})

let data=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let age=24;
        if(age>18){
            console.log("The Labour is joined to the company")
            resolve();
        }else{
            reject(age);
        }
    },1000);
})
async function newData(){
    let Name=await promise;
    console.log(Name);
}
newData().then(()=>{
    console.log("The Labour is used to work for company");
}).catch(()=>{
    console.log("Not fit for work")
})

function order(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let order=true;
            if(order){
                resolve("The Customer ordered the food")
            }else{
                reject("The Customer is not yet ordered the food")
            }
        },3000)
    })
}
function receive(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let receive=true;
            if(receive){
                resolve("The Customer received the food by the server");
            }else{
                reject("So the Customer not received the food its delayed")
            }
        },4000)
    });
}
async function orderedResult(){
    let orderedResult=await order()
    console.log(orderedResult)
    let receiveResult=await receive()
    console.log(receiveResult);
}
orderedResult()
