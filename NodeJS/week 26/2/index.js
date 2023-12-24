const fs = require ("fs");

const nodejsarchitectureinfo = "Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, Unix, macOS, and more. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. ";
fs.writeFile("nodejs_architecture.txt",nodejsarchitectureinfo,(err)=>{
    if (err) throw err;
    console.log("file created");
});



// ------- OUTPUT -------
// file created