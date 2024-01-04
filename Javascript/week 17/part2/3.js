const person = {

    fname : "John",
    lname: "Doe",
    age: 25
}

function ageInDays(personObj, callback){
        
    const fullName = `${personObj.fname} ${personObj.lname}`;
    const ageInDays = personObj.age * 365;
    callback(fullName,ageInDays);
}

function resultLog(fullName,ageInDays){

    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
}

ageInDays(person, resultLog);