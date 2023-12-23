const express = require('express')
var morgan = require('morgan')
const cors = require('cors')
const persons = require('../db.json')
const { default: notes } = require('../src/services/notes')
const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

const generateId = () => {
  const maxId = notes.length > 0
    ? Math.max(...notes.map(n => n.id))
    : 0
  return maxId + 1
}

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
  if (!body.content) {
    return response.status(400).json({
      error: 'content missing'
    })
  }
  const person = {
    content: body.name,
    number: body.number,
    id:generateId(),
  }
 
  persons = persons.concat(person)
  response.json(person)
})
      
    
  


const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
