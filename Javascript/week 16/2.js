const randomNumberGenereator = () =>{

    const randomNumber = Math.floor(Math.random()*100)+1;

    console.log(`Randon number generated is ${randomNumber}`);
}

function countdown(delay){

    let secondsLeft = delay;

    const interval = setInterval(function(){
        console.log(`${secondsLeft} seconds remaining...`);
        secondsLeft--;

        if(secondsLeft<0){
            clearInterval(interval);// Use clearInterval() to stop the time:
            randomNumberGenereator();
        }
    },1000);
}

const delay=3;
countdown(delay);