function go(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("I am going to the shop")
            
        },5000)
    })
}

function buy(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("product received from the shop")
            
        },5000)
    })
}
function back(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("back to home")
                        
        },5000)
    })
}

go()
.then(val=>{console.log(val);return buy()})
.then(val=>{console.log(val);return go()})
.then(val=>{console.log(val)})