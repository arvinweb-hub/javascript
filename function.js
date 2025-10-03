//function

function fun(){
var js= 1;
var js=2;
console.log(js);

let a=10;
a=15;
console.log(a);

const b=20;
console.log(b);
}

fun();

//Types of functions:
//•	Function statement declaration – parameter and arguments
 function box1(hi){
    console.log(hi);
     }
     box1("helloworld");

//•	Function expression and Anonymous function
let a = function box2(js){
    console.log(js);
    
}
a("arguments");
let b = function (jj){
    console.log(jj);
    
}
b("anyarguments");
//•	Immediate invoke function
(function(iife){
    console.log(iife);
    
})
("welcomeiife");
//•	Arrow function
//syntax ---- ()=>{}
let aro =(ab,ba)=>{console.log(ab);
    console.log(ba);
    
}
aro("arrowfunction")




/////
///
////
///

//practice

(function(qa){console.log(qa);
}) 
("test env")

let log = (msg) => console.log("[LOG]:", msg);
log("Starting Execution");
log("Login test completed");

let assertEquals = function(actual, expected) {
    console.log(actual = expected ? "✅ Test Passed" : "❌ Test Failed");
};
assertEquals(200, 200); // simulating API status check
//assertEquals("HomePage", "LoginPage");


(function setup(env) {
    console.log("Test Environment Setup Done!"+env);
})();
