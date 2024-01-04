const urlPattern = /^(http:\/\/|https:\/\/)[a-zA-Z0-9\-._]+[.][a-zA-Z]+$/;

function checkURL(input){
    return urlPattern.test(input);
}


const input1 = "https://www.google.com";
const input2 = "www.google.com"

console.log(`"${input1}" is a valid URL : ${checkURL(input1)}`);
console.log(`"${input2}" is a valid URL : ${checkURL(input2)}`);;