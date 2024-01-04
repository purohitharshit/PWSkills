const students = [
    {
        name: "Mithun",
        marks: 90,
    },
    {
        name: "Prabir",
        marks: 80,
    },
    {
        name: "Alka",
        marks: 75,
    },
    {
        name: "Shivam",
        marks: 93,
    },
    {
        name: "Guddu",
        marks: 89,
    },
    {
        name: "Chintu",
        marks: 92,
    },
]

const finalResult = (name) => {

    for (let student of students) {
        if (student.name === name) {
            return student.marks > 90 ? console.log(`Congratulations ${name}! You have cleared the exam`) : console.log(`Sorry ${name}! you have not cleared the exam`);
        }
    }
    console.log("Please enter a valid name");

}

finalResult("Shivam");
finalResult("Rohan");
finalResult("Alka");