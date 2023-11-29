const stringArray = [ 'eat', 'work', 'sleep'];
for (let i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i]);
}

let fruits = ["orange", "apple", "mango"];
for (let fruit of fruits) {
    console.log(fruit);
}
fruits.push("banana");

let multidimensional = [
    [1,2,3],[2,5,6],[7,8,9]
]
console.log(multidimensional[1][1]);

function HelloWorld() {
    console.log("Hello world");
}
//HelloWorld()

function HelloWorld() {
    message="hi"
}
//console.log(message);

message="hi"
function HelloWorld() {
    console.log(message);
}
//HelloWorld()

function HelloWorld(message) {
    console.log(message);
}
//HelloWorld("Hi");

function multiply(a, b=1) {
    console.log(a*b);
}
multiply(4)

function multiply(a, b=1) {
    return a*b;
}
result=multiply(5);
console.log(result);

let pet={
    name:"Lulu",
    age:2
}
console.log(pet.name);
//hy
let pet={
    name:"Lulu",
    age:2
}
console.log[pet.name];
//ty
let pet={
    name:"Lulu",
    age:2
}
console.log[pet.age];
//oy
let pet={
    name:"Lulu",
    age:3
}
console.log(pet.age);
pet.sound="Mau mau"
delete pet.sound

let pet={
    name:"Lulu",
    age:2,
    sound:"Mau mau",
    makeSound(){
        console.log(this.sound)
    }
}
pet.makeSound()  