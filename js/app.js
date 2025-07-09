const books = [
    {
        title: "React Billionaire",
        pages: 250,
        author: {
            name: 'Alice',
            age: 35
        },
        available: false,
        price: '101€',
        tags: ['advanced', 'js', 'react', 'senior']
    },
    {
        title: "Advanced JS",
        pages: 500,
        author: {
            name: 'Bob',
            age: 20
        },
        available: true,
        price: '25€',
        tags: ['advanced', 'js', 'mid-senior']
    },
    {
        title: "CSS Secrets",
        pages: 320,
        author: {
            name: 'Alice',
            age: 17
        },
        available: true,
        price: '8€',
        tags: ['html', 'css', 'junior']
    },
    {
        title: "HTML Mastery",
        pages: 200,
        author: {
            name: 'Charlie',
            age: 50
        },
        available: false,
        price: '48€',
        tags: ['html', 'advanced', 'junior', 'mid-senior']
    },
];

// Snack 1

const longBooks = books.filter(book => {
    return book.pages > 300
})

console.log(longBooks)

const longBooksTitles = longBooks.map(book => {
    return book.title
})

console.log(longBooksTitles)

// Snack 2 

const availableBooks = books.filter(book => {
    return book.available === true
})

console.log(availableBooks)

const discountedBooks = structuredClone(availableBooks)

discountedBooks.map(book => {

    book.price = parseInt(book.price) * (1 - 0.20)
    return { ...availableBooks }
})

console.log(discountedBooks)

const fullPricedBook = discountedBooks.find(book => {
    return book.price % 1 === 0
})

console.log(fullPricedBook)

// Snack 3 

const authors = books.map(book => {
    return book.author
})

console.log(authors)

const areAuthorsAdults = authors.every(a => a.age >= 18)

authors.sort((a, b) => {
    if (areAuthorsAdults) {
        return a.age - b.age
    } else {
        return b.age - a.age
    }
})

console.log(authors)


// Snack 4 

const ages = books.map(book =>{
    return book.author.age
})

console.log(ages)

const agesSum = ages.reduce((acc, currentAge)=>{
    return acc + currentAge
}, 0)

console.log(agesSum)

const avaregeAge = agesSum / ages.length

console.log(avaregeAge)

// Snack 5

async function fecthJson(url) {
    const response = await fetch(url)
    const data = response.json()
    return data
}

const ids = [2, 13, 7, 21, 19]

async function getBooks(ids) {
    const promises = ids.map(id =>{
        return fecthJson(`http://localhost:3333/books/${id}`)
    })
    const books = await Promise.all(promises)
    return books
}

(async() =>{
    const booksLet = await getBooks(ids)
    console.log(booksLet)
})()