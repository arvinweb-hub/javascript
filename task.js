//task 1 
let app = "apple"
for (sep of app){
    console.log(sep); 
}

//task 2 - print even num
for ( let i=1; i<=20; i++) {
    if ( i %2==0){
        console.log(i);} 

}

class task{
    printeven(){
        for (let i=1;i<=20;i++){
            if (i%2==0){
                console.log(i);
                
            }
        }
    }
}


// task 3 - print 1to 20 in pyramidstructure
for (let i=1;i<=5;i++) {
    let b=[]
    for (let j=1;j<=i;j++){   
        b+=j;
    } 
    console.log(b);
}

let py=""
for(i=1;i<=20;i++){
    py+=i
    console.log(py);
    
}


//palindrome --> thought reversed same word would appear
let giventext="madam"
let palin=""

for(i=giventext.length-1;i>=0;i--){
    palin+=giventext[i]
}
console.log(palin);

if(giventext===palin){
    console.log("given text is palindrome");
    
}else{
    console.log("given text is not a palindrome");
    
}

//anagram --> having same character
const x="listen"
const y="silentkill"

const x1=x.split("").sort().join("")
const y1=y.split("").sort().join("")

if (x1===y1){
    console.log("it's anagram");
    
}else{
    console.log("it's not anagram");
    
}

// count of charcaters
let a1="banana"
b1="a"
//console.log(a1.split(""));
a2=""
for(i=a1.length-1;i>=0;i--){
    if( a1[i]==b1){
       a2+=b1;
    }       
        
}
console.log(a2);
let numb1=a2.length
console.log(numb1);
