function manipulateString(str,callback){
    return callback(str.toUpperCase());
}

function logString(str){
    console.log(`The manipulated String is ${str}`);
}


manipulateString("Hello World",logString);
