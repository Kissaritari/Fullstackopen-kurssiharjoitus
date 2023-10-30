import { useEffect, useState } from 'react'
import "./App.css"
import { Lista } from './components/Lista'
import { AddPerson } from './components/AddPerson'
import { Filtteri } from './components/Filtteri'
import personService from './services/notes'


const App = () => {
  const [persons, setPersons] = useState([]) 

  const [currentSeachTerm, setSearchTerm] = useState('')

  const personsToShow = currentSeachTerm == ''
    ? persons
    : persons.filter(person =>  person.name.toLowerCase().includes(currentSeachTerm.toLowerCase()) )

    useEffect(() => {
      personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
    }, []) // added dependency array


  return (
    <div className="main">
      <h1>Phonebook</h1>
      <div>
        {Filtteri(currentSeachTerm,setSearchTerm)}
      </div>
      <h2> Add a new </h2>
      <div>
        {AddPerson(persons,setPersons)}
      </div>
      <h2> All the kissa ladies </h2>
      <div>
        {Lista(personsToShow,setPersons)}
      </div> 
    </div>
  )

}

export default App
