let apiResponse = {
    statusCode: 200,
    responseTime: 450,
    body: {
        userId: 101,
        role: "admin",
        active: true
    }
};
// 👉 Tasks:

// Use comparison operators to check if statusCode === 200.
let responsecode = 200
let a =(responsecode===apiResponse.statusCode)
a =(apiResponse.statusCode===200)
console.log(a);

// Use logical operators to check if statusCode === 200 && responseTime < 500.
b= (apiResponse.statusCode===200 && apiResponse.responseTime<500)
console.log(b);



// Store all test steps inside an array (e.g., "Check Status", "Check Response Time", "Check Role").
c=["Check Status-"+apiResponse.statusCode, "Check response Time-"+apiResponse.responseTime,"Check Role-"+apiResponse.body.role]
console.log(c);

// Print the first and last step using array index.

console.log(c[0]);
console.log(c[c.length-1]);


//it prints only the c[2]
// Write a function validateRole(expectedRole) that compares body.role with the expected role using ===.
// let f=function validateRole(expectedRole){
//     console.log(apiResponse.body.role===expectedRole);
// }
// f('admin')

// // Print "✅ Test Passed" or "❌ Test Failed" using a ternary operator.
// let e=(apiResponse.body.role==f('admin'))? "Test Passed" : "Test Failed"
// console.log(e);
// //if i use 'admkn directly getting passed else in this way as above it is failed



// 5. Function to validate role
let validateRole = function(expectedRole){
    return apiResponse.body.role === expectedRole;
};
validateRole('admin')
// // 6. Ternary assertion
// let result = validateRole('admin') 
//     ? "✅ Test Passed" 
//     : "❌ Test Failed";
// console.log(result);


let apiResponses = {
    statusCode: 200,
    responseTime: 350,
    body: {
        userId: 101,

        role: "tester",
        active: true
    }
};

let ans2=((apiResponses.responseTime)<500)?"passed":"failed"
console.log(ans2);

console.log(apiResponses.body.role)

//let ans1=((apiResponse.statusCode)=="200")?"Status code is 200 as expected":"status code is not 200"
//console.log(ans1);
if (apiResponses.statusCode==200){
    console.log("passed");    
}else{
    console.log("failed");
    }

let users = [
    { name: "john doe", role: "developer" },
    { name: "mary jane", role: "tester" },
    { name: "steve smith", role: "tester" },
    { name: "alice brown", role: "manager" }
]

let cname=(users.map(users)=>.split(" ").toUppercase().Join(" "))
console.log(cname);



// // 1. Capitalize each user's name
// let capitalizedUsers = users.map(user => {
//     let capitalizedName = user.name
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ");
//     return { ...user, name: capitalizedName };
// });
// console.log("Capitalized Users:", capitalizedUsers);



urt=""
for i=
if ((users.role)="tester"    urt+=

}






