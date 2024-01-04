const Pattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

function checkURL(input){
    return Pattern.test(input);
}

const input1 = "https://www.linkedin.com/in/name3564";
const input2 = "https://www.linkedin.com/name3564";

console.log(`"${input1}" is a valid linkedin URL : ${checkURL(input1)}`);
console.log(`"${input2}" is a valid linkedin URL : ${checkURL(input2)}`);


