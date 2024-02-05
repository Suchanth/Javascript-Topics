//Promises in Javascript
//there are two methods involves in promises(resolve,reject)
//resolve(success),reject(failure)
let tickets=new Promise((resolve,reject)=>{
    let bookingsuccess=true;
    if(bookingsuccess){
        resolve(670);
    }
    else{
        reject();
    }

});
tickets.then((amt)=> console.log(`Thanks for Booking a ticket.I will transfer amount Rs.${amt}`))
.catch(()=>console.log("Thanks for trying to booking a ticket"))

//another method used to written in a function
function ticketbooking(){
    return new Promise((resolve,reject)=>{
        let bookingsuccess=true;
        if(bookingsuccess){
            resolve(670);
        }
        else{
            reject();
        }
    
    });
}
ticketbooking().then((amt)=> console.log(`Thanks for Booking a ticket.I will transfer amount Rs.${amt}`))
.catch(()=>console.log("Thanks for trying to booking a ticket"))

//Example2
function tossCoin(){
    return new Promise((reject,resolve)=>{
        let random=Math.floor(Math.random()*2)
        if(random==0){
            resolve()
        }
        else{
            reject()
        }
    });
}
tossCoin()
.then(()=>console.log("Congratulations.You won the toss,It's Head"))
.catch(()=>console.log("Sorry.You loss the toss,It's Tail"))


//static methods in promises
//Promises.all()-it check all the function if any one occur error it rejects
const reachA=new Promise((resolve,reject)=>{
    const reached=true;
    if(reached){
        setTimeout(resolve,5000,"Ramesh reached")
    }
    else{
        reject("Ramesh not reached");
    }
})
const reachB=new Promise((resolve,reject)=>{
    const reached=false;
    if(reached){
        setTimeout(resolve,3000,"Suresh reached")
    }
    else{
        reject("Suresh not reached");
    }
})
const reachC=new Promise((resolve,reject)=>{
    const reached=true;
    if(reached){
        setTimeout(resolve,4000,"Dinesh reached")
    }
    else{
        reject("Dinesh not reached");
    }
})
Promise.all([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

//promises-pending,resolve,reject
//Promise.allSettled-it is used to settled the resolve and reject value
Promise.allSettled([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

//Promise.any()-it should occur any one  the resolve condition occurs if all function occur error it rejects
Promise.any([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

//Promise.race()-it check the milliseconds in timeout to resolve 
Promise.race([reachA,reachB,reachC])
.then((message)=>console.log(message))
.catch((message)=>console.log(message))

//Example
let developer = true;
let promise=new Promise((resolve,reject)=>{
    if(developer){
        resolve("The project is executed successfully")
    }
    else{
        reject("The project is not executed");
    }
});
promise.then((successMsg)=>{
    console.log(successMsg);
}).catch((FailureMsg)=>{
    console.log(FailureMsg);
}).finally(()=>{
    console.log("The project is ended.");
})


