const express = require('express')
var morgan = require('morgan')
const app = express()
app.use(express.json())
app.use(morgan('tiny'))
let persons = [
    {
        "name": "kipsi",
        "number": "123124599",
        "id": 8
      },
      {
        "name": "kisaa",
        "number": "34yhe",
        "id": 10
      },
      {
        "name": "anita",
        "number": "8489756",
        "id": 11
      },
      {
        "name": "samul",
        "number": "5247574356",
        "id": 12
      },
      {
        "name": "johannes",
        "number": "463276",
        "id": 13
      }
]


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req,res) => {
    const aika = new Date
    res.send(`<p>the Phonebook has info for ${persons.length} people</p><p>${aika}</p>`)
    
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(person => person.id === id)
    if (person) { 
        res.json(person)
      } else { 
        res.status(404).end()  }
  })

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(person => person.id !== id)
    res.status(204).end()  }
    )


    app.post('/api/persons', (request, response) => {
      const body = request.body
      console.log(body)
      response.json(body)
    })
      
    
  


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
