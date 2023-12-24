const fs = require("fs");

fs.readFile("../2/nodejs_architecture.txt","utf-8",(err,data)=>{
    if(err) console.log(err);
    console.log(data)
})



// ------ OUTPUT ------

// Advantages of Using Node Js: 1. Offers high-performance for Real-time Applications. 2. Offers easy scalability for modern applications. 3. Web App Development. 4. Improves App Response Time and Boosts Performance.