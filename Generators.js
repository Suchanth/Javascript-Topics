//Generators in ES6
//Generators can help you to resume and pass the code
//The function * is used to define a keyword in generator function
//yield is an operator which passes the generator
//yield also help us to receive input & send output
const genFunction=function *(){
    console.log("Hello");
    yield "Yield value";
    console.log("World");
    yield "Yield value";
    console.log("I am Learning Javascript");
}
let gObj=genFunction()
for(let generator of gObj){
    console.log(generator);
}
//console.log(gObj.next());
//console.log(gObj.next());
//console.log(gObj.next());
//console.log(gObj.next())

//Generatos are best with the iterators
//yield opertor used only with the generator functions
const obj={
    start:10,
    end:20,
    [Symbol.iterator]:function *(){
        for(let count=this.start;count<=this.end;count++){
            yield count;
        }
    }
}
//for(i of obj)
//console.log(i);
console.log([...obj]);

//when it comes to recursive function or calling one generator function from another the yield* syntax is used.
//yield should be used inside the generator function
//Generator method shows return() and throw()
function *gen(){
    yield "One";
    yield "Two";
}
let generators=gen()
console.log(generators.next());
console.log(generators.return());//It has terminated the return the generator and it returns "done:true"
console.log(generators.next());

//Exception handling
//writing yield inside finally will not allow the return() to terminate
function *generator(){
    try{
        yield "One";
        yield "Two"
    }finally{
        yield "finally"
    }

}
const genObject=generator()
console.log(genObject.next());
console.log(genObject.next())
console.log(genObject.next());
console.log(genObject.return());

//throw method throws an exception at the location of yield which made the last suspension in the generator function
//if there is an error condition you will write throw() or return()
//the methods shown earlier are used in some situations only,with if condition or switch case only.
function *generator(){
    try{
        yield "One";
        yield "Two"
    }catch(err){
        console.log("Error",+err);
    }

}
const genObject1=generator()
console.log(genObject1.next());
console.log(genObject1.throw());
console.log(genObject.return())