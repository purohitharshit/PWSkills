const http = require("http");

http.createServer(function(req,res){
    res.write("I Am Happy To Learn Full Stack Web Development From PW Skills!");
    res.end();
}).listen(8080);


// ------ OUTPUT ----- on localhost:8080

// I Am Happy To Learn Full Stack Web Development From PW Skills!