class car{
    constructor(brand,price,colour){
        this.brand=brand
        this.price=price
        this.colour=colour
    }
    out1(){
        console.log(`i need ${this.brand} car \n  The minimum price is ${this.price} \ncolour of the car is ${this.colour}`);
    }
}

const carjs = new car("bmw","80lakhs","black")
carjs.out1()