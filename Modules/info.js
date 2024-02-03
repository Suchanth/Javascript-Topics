//Modules
//export let myName="Ramesh";
//export let myAddress="Salem";
//export let myEmail="ramesh234@gmail.com";

//let myName="Ramesh";
//let myAddress="Salem";
//let myEmail="ramesh234@gmail.com";
//export {myName,myAddress,myEmail};

//let users=["Ramesh","Shami","Kohli","Rohit"];
//export default users;

//let userInfo=[
   // {name:"Dhoni",address:"Chennai"},
    //{name:"Shami",address:"Gujarat"},
    //{name:"Kohli",address:"Bangalore"},
    //{name:"Rohit",address:"Mumbai"},
//]
//export default userInfo;

//1.Named Exports
let myName="Ramesh";
let myAddress="Salem";
let myEmail="ramesh234@gmail.com"
export {myName as Name,myAddress as Address,myEmail as Email};

//2.Default Exports
function Counter(limit){
    for(let i=1;i<=limit;i++){
        setTimeout(()=>{
            console.log(i);
        },i*1000);
    }
}
export default Counter;