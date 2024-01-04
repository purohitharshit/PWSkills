function calculateRemainingDays(eventDate){

    const currentDateTime = new Date();
    const eventDateTime = new Date(eventDate);
    // console.log(eventDateTime);
    // console.log(currentDate);

    const timeDifference = eventDateTime - currentDateTime;
    const daysRemaining = Math.ceil(timeDifference / (1000*60*60*24));

    return daysRemaining;
}

const eventDate = "2023-08-31";

console.log(calculateRemainingDays(eventDate));

