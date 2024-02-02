//Template Strings 
//Introduced in 2015 ECMAScript or ES6
//Template Strings use back-ticks (``) rather than the quotes ("") to define a string
let firstname="Ram";
let lastname="Kumar";
let city="Salem";
console.log(firstname + " " + lastname + " lives in "+ city); 

//backtics-string interpolation
let message=`${firstname} ${lastname} lives in ${city}`;
console.log(message);

//multiline strings
let msg=`happy
birthday`;
console.log(msg);

//single and double quotes in strings
res=`Sun rise's in the "east"`;
console.log(res);

//Example1:
let name=`I am learning the "Javascript"`;
console.log(name);
let name1="Raj";
let name2="Kumar";
console.log(`${name1} ${name2}`);