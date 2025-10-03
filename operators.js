//Operators
// •	Arithmetic
// add + 
// sub -  
// mul *    
// div /   
// modulus %  
// expond **   
// increment ++   
// decrement --

let a =50
let b=5
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

let c=10
c++   //c+1
console.log(c);

let d=10
d--  //d-1
console.log(d);


let ab=5
ab++
ab--
console.log(ab);

//•	Assignment
let as=5
as +=10
let as=5
as -=10
console.log(as);

let as=5
as *=10
console.log(as);

let as=5
as /=10
console.log(as);

let as=5
as %=10
console.log(as);

let as=5
as ++=10
console.log(as);

let as=5
as --=10
console.log(as);

console.log(as);


//•	Comparison
// < 
// > 
// <= 
// >=

let x= 10
let z= 10
console.log(x<z);
console.log(x>z);
console.log(x<=z);
console.log(x>=z);

//•	Logical
// && - And
// || - Or
// ! - not

let log =10
let opr=10
console.log(log != opr);

//•	Strict
// == loose equality /double equality
//  === strict equality / triple equality

let num = 10
let dum  = '10'

console.log(num == dum);
console.log(num === dum);



//•	Ternary

//syntax
//variable=(condition)? "truevalue": "false value"
let statuscode = 200
let result = (statuscode === 200) ? "✅ Test Passed" : "❌ Test Failed";
console.log(result);

console.log((statuscode === 200) ? "✅ Test Passed" : "❌ Test Failed");



let score =75
let grade = (score >= 80) ? 'A': (score >=70) ? 'B' : (score>=60)? 'C': 'D' ;
console.log(grade);

let age =30;
let rights = (age>=18 && age<=90)? "eligible to vote":"not eligible to vote"
console.log(rights);

let mark =5;
let rank = (mark>=35 || mark<=100)? "pass":"fail"
console.log(rank);

let mark =500;
let rank = (mark<=35 || mark<=100)? "pass": "fail"
console.log(rank);




