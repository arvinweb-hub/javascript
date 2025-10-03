//map reduce filter

// variable name.map((value, index.accumulator)=>)

let a = [10,20,30,40,50]
let con =a.map((v,i,a)=>v+5)
console.log(con);
let con1=a.map((v,i,a)=>i+5)
console.log(con1);


// v is values
//in is index
// a is accumulator --> we can't do anything with accumulator  in map and filter

let b =[1,2,3,88,199,568,245,684,12,546,32,358,254,68555,5,6,8,]
//let fil = b.filter((x,y)=>x>=100)
let fil = b.filter((x)=>x<10)
console.log(fil);

//reduce

// array.reduce((accumulator, currentValue) => {
// // logic to accumulate values
// return updatedAccumulator,
// });

// array.reduce((accumulator, currentValue) => )
 let c=[10,20,30,40,50]
 let red=c.reduce((a,c)=>a+c)
 console.log(red);
 
