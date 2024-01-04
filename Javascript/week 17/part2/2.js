function hof(str,callback){

    const newString="";
    
    for(let i=0;i<str.length;i++){
        newString.push(callback(str[i])); 

    }

    return newString;

}

function upperCase(str){

    return str.toUpperCase();
}

const str = "Hello World";
const result = hof(str,upperCase);
console.log(result);