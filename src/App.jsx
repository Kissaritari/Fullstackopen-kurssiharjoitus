import { useEffect, useState } from 'react'
import "./App.css"
import { Lista } from './components/Lista'
import { AddPerson } from './components/AddPerson'
import { Filtteri } from './components/Filtteri'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 

  const [currentSeachTerm, setSearchTerm] = useState('')

  const personsToShow = currentSeachTerm == ''
    ? persons
    : persons.filter(person =>  person.name.toLowerCase().includes(currentSeachTerm.toLowerCase()) )

    useEffect(() => {
      axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
    })
  return (
    <div className="main">
      <h2>Phonebook</h2>
      <div>
        {Filtteri(currentSeachTerm,setSearchTerm)}
      </div>
      <h2> Add a new </h2>
      <div>
        {AddPerson(persons,setPersons)}
      </div>
      <h2> All the kissa ladies </h2>
      <div>
        {Lista(personsToShow)}
      </div> 
    </div>
  )

}

export default App
