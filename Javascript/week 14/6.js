const productDetails = {
    name: "Laptop",
    price: 90000,
    color: "Grey",
    hardDisk: "512 GB"
}

// console.log("Below are the product details");
// console.log(`name: ${productDetails.name}`);
// console.log(`price: ${productDetails.price}`);
// console.log(`color: ${productDetails.color}`);
// console.log(`hardDisk: ${productDetails.hardDisk}`);

for(let keys of Object.keys(productDetails)){
    console.log(`${keys} : ${productDetails[keys]}`);
}
