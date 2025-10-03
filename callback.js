function box1(callback){
    setTimeout(()=>{
        console.log("loading");
        callback()
        
    },5000);
}
function box2(callback){
    setTimeout(()=>{
        console.log("loading successfull");
        callback()
    },1000);
};  
//box1(box2())
function box3(callback){
    setTimeout(()=>{
        console.log("call backloading successfull");
        
    },1000);
};

//callback hell
box1(()=>{
    box2(()=>{
        box3(()=>{})
    })
})


function add(a,b){
    return a+b
}
console.log(add(1,2));
 