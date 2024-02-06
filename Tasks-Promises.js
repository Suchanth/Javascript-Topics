//Promises
function myName(){
    return new Promise((resolve,reject)=>{
        let age=32;
        if(age>18){
            resolve("Eligible for voting");
        }
        else{
            reject("Not Eligible for Voting");
        }
    });
}
myName().then((success)=>{console.log(success)})
.catch((failure)=>{console.log(failure)})


let Participants=34;
function myStudent(){
    return new Promise((resolve,reject)=>{
        if(Participants==34){
            setTimeout(()=>{
                resolve("The Participants is arrived.");
            },3000);
        }
        else{
            reject("Wait for some time to arrive the remaining participants")
        }
    });
}
myStudent().then((success)=>{console.log(success)})
.catch((failure)=>{console.log(failure)})
.finally(()=>{console.log("The Game will be started")});

//Static methods in promises:
Promise.all([Participants])
.then((success)=>{console.log(success)})
.catch((failure)=>{console.log(failure)})
.finally(()=>{console.log("The Game will be started")});

Promise.allSettled([Participants])
.then((success)=>{console.log(success)})
.catch((failure)=>{console.log(failure)})
.finally(()=>{console.log("The Game will be started")});


Promise.any([Participants])
.then((success)=>{console.log(success)})
.catch((failure)=>{console.log(failure)})
.finally(()=>{console.log("The Game will be started")});

Promise.race([Participants])
.then((success)=>{console.log(success)})
.catch((failure)=>{console.log(failure)})
.finally(()=>{console.log("The Game will be started")});

