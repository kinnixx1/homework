let a=10;
let b=3
let c=3;
console.log(a>b);
console.log(a<b);
console.log(a===c);
console.log(b===c);

let number=18;
//check if number is greater than 18
if (number>18) {
    console.log("The number is positive");
}
//check if number is 18
else if (number==18) {
    console.log("The number is 18");
}
// if number is neither greater than 18
else {
    console.log("The number is either a negative");
}

let fruit='orange';
switch (fruit) {
    case 'orange':
    console.log ('Orange are $0.59 a pound');
    break;
    case 'apple':
    console.log ('Apples are $0.532 a pound');
    break;
    case 'banana':
    console.log ('Banana are $0.48 a pound');
    break;
    default:
        console.log ('Sorru, me are out of this fruit');
} 


//program to display numbers from 1 to 5
let i=1;
while (i<=5) {
    console.log(i);
    i+=1;
}

//program to display numbers from 1 to 5
let ac=0;
while (ac<10) {
    console.log(ac);
    ac+=2;
}

let ab=1;
do {
    console.log(ab);
    ab+=1;
} while (ab<=5)

for (let i=1; i<=5; i++) {
    console.log(i);
}

//empty array
const myList = [ ];
//array of numbers
const numberArray = [2,4,6,8];
//array of strings
const atringArray = ['eat', 'work', 'sleep'];
for (let i=0; i<stringArray; i++){
    console.log (stringArray[i]);
}
//aray with mixed data types
const newData = ['work', 'exercise', 1, true];
newData.length()