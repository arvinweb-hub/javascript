// JS  supportssevral types of loops
// 1.	For loops
// 2.	While Loops
// 3.	Do while loop
// 4.	For in
// 5.	For of

// for (initialization;condition;iteration)

for (let i=1;i<=5;i++){
    console.log(i);
    }


let name1='Arvin'
for (let i=1;i<=5;i++){
    console.log(name1);
    }

//initialization
//while(condition){
//iteration
//}

let a=1;
while(a<=5){
    console.log(a);
    a++    
}



//INITIALIZATION
//DO{
//LOG()
//ITERATION
//}WHILE(CONDITION)

let B=1;
do{
    console.log(B);
    B++
    
}while(B<=5)

    //task=== print 5 to 1 

let num=5
do{
    console.log(num);
    num--
}while(num>=1)


//for of    
let arr = ["java",123,true,null]
for (sep of arr){
    console.log(sep);
    
}


//for in 

let obj = {
    name:'Arvin',
    id: 2345,
    work: "develop",
    location:"chennai"
}

for (spl in obj){
    console.log(spl ,":"+obj[spl]);   
}

