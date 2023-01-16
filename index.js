const express = require('express')
const app = express()

const PORT = 3001

const persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/info', (req, res) => {
    const personsCount = persons.length
    const date = new Date
    res.send(`<h1>Phonebook has info for ${personsCount} people</h1><h2>${date}</h2>`)
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})