// String Methods

// length: Returns the length of the string.

// toUpperCase(): Converts the entire string to uppercase.
// toLowerCase(): Converts the entire string to lowercase.
// charAt(index): Returns the character at the specified index.
// indexOf: Returns the index of the first occurrence of the specified substring.
// lastIndexOf(): Returns the index of the last occurrence of the specified substring.
// slice(): Extracts a section of the string (similar to substring)
// substring: it use to gr a particle value in the string value
// replace(): Replaces the specified value with a new value.
// replaceAll: it use to replace all the words in the given para
// trim(): Removes whitespace from both ends of the string.
// split(): Splits the string into an array of substring
// join: it is use to joining the words
// concat(): Joins two or more strings.
// startsWith(): Checks if the string starts with the specified substring.
// endsWith(): Checks if the string ends with the specified substring.
// includes(): Checks if the string contains the specified substring.


let str= "hello java welcome to java world"
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(4));
console.log(str.indexOf("a"));
console.log(str.lastIndexOf("a"));
console.log(str.slice(5));
console.log(str.substring(0,6));
console.log(str.replace("java","js"));
console.log(str.replaceAll("java","jj"));
console.log(str.trim());
console.log(str.split(""));
console.log(str.split("").join("to"));
console.log(str.concat("nice to meet you"));
console.log(str.startsWith("h"));
console.log(str.endsWith("d"));
console.log(str.includes("wel"));

console.log(str.split(""));

// let str1="  chennai city center   "
// console.log(str1.toTitleCase()); - str1.toTitleCase is not a function
//console.log(str1.split(" ").charAt(0).toUpperCase());

let str2="banana";
console.log(str2.split('n').length-1);



let str1= "hello java welcome to java world"
console.log(str1.split("").reverse().join(""));









