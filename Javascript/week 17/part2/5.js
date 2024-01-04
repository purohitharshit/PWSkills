function greet(name){

    return new Promise((resolve) => {
        const greeting= `Hello ${name}`;
        resolve(greeting);
    })
}

greet("Mohan").then((message)=> console.log(message));