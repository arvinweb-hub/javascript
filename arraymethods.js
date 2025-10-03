// Array & String
// An array in JavaScript is a special type of object used to store multiple values in a single variable.
// It can hold a collection of elements, which can be of any data type
// Arrays are useful for storing lists of data.
// Methods
// 1.push(): Adds a new element to the end of the array

let one = [10,20,30,40,50]
one.push(60)
console.log(one.length);

// 2.pop(): Removes the last element from the array.
let two = [10,20,30,40,50]
two.pop(50)
console.log(two);

// 3.shift(): Removes the first element from the array.
let three = [10,20,30,40,50]
//three.shift()
console.log(three);

// 4.unshift(): Adds a new element to the beginning of the array.
let four = [10,20,30,40,50]
four.unshift(5)
console.log(four);

// 5.splice(): Adds or removes elements from the array.
// //syntax
// // variable name.splice(index.splice num.value) {}
// //0 it is use to add a value in the given index number and it will move forword the already existing value
// //1 it is use to add a value in the given index number and it will remove the already existing value (like) kind of replace
// splice(add, remove, replace)


let days= ['sunday',"monday","wednesday","thursday","friday","saturday"]
days.splice(2,0,"tuesday")
console.log(days);

days.splice(0,1,"spliced:)")
console.log(days);


// 6.sort(): Sorts the elements of the array.
let abc= ["a","c","b","f","g"]
//for ascending
console.log(abc.sort());
// for decending
console.log(abc.sort());

// 7.reverse(): Reverses the order of elements in the array.

let str = "trendnologies"
console.log(str.split("").reverse().join(""));




//practice::
let numbers = [3, 1, 4, 2, 5];

// Sort in ascending order
//numbers.sort((a, b) => a - b);
numbers.sort()
console.log(numbers);
// Reverse the order to descending
numbers.reverse();
console.log(numbers); // Output: [5, 4, 3, 2, 1]

