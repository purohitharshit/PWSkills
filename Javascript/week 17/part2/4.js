const books = [
    {
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        year: 1988
    },
    {
        title: 'Atomic Habits',
        author: 'James Clear',
        year: 2018
    },
    {
        title: 'The Four Agreements',
        author: ' Don Miguel Ruiz',
        year: 1997
    },
    {
        title: 'Deep Work',
        author: 'Cal Newport',
        year: 2016
    },
    {
        title: 'The 48 Laws of Power',
        author: 'Robert Greene',
        year: 1998
    },

]

function extractTitle(books,callback)
{
    const titles = books.map((book)=> book.title);
    callback(titles);
}

function titleSort(titles)
{
    titles.sort();
    console.log(titles.join(", "));
    // console.log(titles);
}

extractTitle(books,titleSort);

