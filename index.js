let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//a) Use the split method on the string to identify the purpose of the parameter inside the ().

console.log(str.split());
console.log(str.split("e"));
console.log(str.split(" "));
console.log(str.split(""));
console.log("====\n")
//It splits eleements based on  what we put inside the ()

//b) Use the join method on the array to identify the purpose of the parameter inside the ().
console.log(arr);
console.log(arr.join());
console.log(arr.join("a"));
console.log(arr.join(" "));
console.log(arr.join(""));
console.log("====\n")

//The purpose of join is

//c) Do split or join change the original string/array?

console.log(str.split(',').sort().join(','));

console.log(str);
console.log("====\n")

//No it doesnt change the orignal array

//d) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";

let newArray=[];
console.log(cargoHold);
newArray = cargoHold.split(",");
console.log(newArray);
console.log("Alphabetized");
newArray.sort();
console.log("New string: ");
newArray.join(" ");