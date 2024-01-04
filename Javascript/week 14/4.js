const products = [
    {
        name:"laptop",
        price:120000
    },
    {
        name:"laptop bag",
        price:2000
    },
    {
        name:"mobile",
        price:70000
    },
    {
        name:"mobile charger",
        price:1500
    },
    {
        name:"watch",
        price:20000
    },
]

let maxVal = {name:"",price:0};
let minVal = {name:"",price: Number.MAX_VALUE};

for(let product of products){
    if(product.price > maxVal.price){
        maxVal = product;
    }
    if(product.price < minVal.price){
        minVal = product;
    }
}

console.log(`The product with maximum value is ${maxVal.name} and its price is ${maxVal.price}`);
console.log(`The product with minimum value is ${minVal.name} and its price is ${minVal.price}`);
