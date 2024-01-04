async function fetchData(){

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await repsonse.json(); 
    console.log(data);
}

fetchData();