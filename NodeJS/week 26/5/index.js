const fs = require("fs");

fs.unlink("../2/nodejs_architecture.txt",(err)=>{
    if(err) console.log(err);
    console.log("File deleted successfully");
})


// ------- OUTPUT ------- 

// File deleted successfully