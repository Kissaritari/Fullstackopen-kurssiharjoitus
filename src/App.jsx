import { useEffect, useState } from 'react'
import "./App.css"
import { Lista } from './components/Lista'
import { AddPerson } from './components/AddPerson'
import { Filtteri } from './components/Filtteri'
import { Notification } from './components/Notification'
import personService from './services/notes'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [changeMessage, setChangeMessage] = useState(null)
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

    const Remove = (id,name) => {
      if(window.confirm(`Poistetaanko ${name} id:llä ${id}?`)) {
        console.log(`poistettu ${id}`);
      
        personService.remove(id)
            .then(() => {
            setPersons(persons.filter((Person) => Person.id !== id));})}
            setChangeMessage(`Succesfully removed person ${name}`)
            setTimeout(() => {
              setChangeMessage(null)
            }, 5000)
            }

  return (
    <div className="main">
      <h1>Phonebook</h1>
      <Notification message={changeMessage}/>
      <div>
        {Filtteri(currentSeachTerm,setSearchTerm)}
      </div>
      <h2> Add a new </h2>
      <div>
        {AddPerson(persons,setPersons,setChangeMessage)}
      </div>
      <h2> All the kissa ladies </h2>
      <div>
        {Lista(personsToShow,Remove)}
      </div> 
    </div>
  )

}

export default App
