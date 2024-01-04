const books = [
    {
        name: 'The Alchemist',
        author: 'Paulo Coelho',
        year: 1988
    },
    {
        name: 'Atomic Habits',
        author: 'James Clear',
        year: 2018
    },
    {
        name: 'The Four Agreements',
        author: ' Don Miguel Ruiz',
        year: 1997
    },
    {
        name: 'Deep Work',
        author: 'Cal Newport',
        year: 2016
    },
    {
        name: 'The 48 Laws of Power',
        author: 'Robert Greene',
        year: 1998
    },

]
const remaining = [];

const booksBefore2010 = books.filter((item) => {

    if (item.year < 2010) {
        return item;
    }
    else {
        item.author = item.author.toUpperCase();
        // remaining.push({...item});
        remaining.push(item);
    }
})

console.log(remaining);

/*

OUTPUT
[
    { name: 'Atomic Habits', author: 'JAMES CLEAR', year: 2018 },
    { name: 'Deep Work', author: 'CAL NEWPORT', year: 2016 }
]

*/