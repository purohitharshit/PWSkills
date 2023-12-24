const fs = require("fs");

const appendData = "Advantages of Using Node Js: 1. Offers high-performance for Real-time Applications. 2. Offers easy scalability for modern applications. 3. Web App Development. 4. Improves App Response Time and Boosts Performance.";

fs.appendFile("../2/nodejs_architecture.txt",appendData,(err)=>{
    if(err) throw err;
    console.log("file appended");
})