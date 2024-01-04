
const Users = [
    "Ram",
    "Shyam",
    "Mohan",
    "Sohan",
    "Bittu",
    "Guddu",
    "Pinku"
]

function isUserPresent(user){
    if(Users.includes(user))
    console.log(`Yes, ${user} is a valid user`);

    else
    console.log(`No, ${user} is not a valid user`);

}


isUserPresent("Ram");

isUserPresent("John");