import personService from '../services/notes'
import { useState } from 'react';

export function AddPerson(persons, setPersons) {
  const [newName, setNewName] = useState('');

  const [newNumber, setNewNumber] = useState('');

 
  const addPerson = (event) => {
    event.preventDefault();

    const newPerson = { name: newName, number: newNumber };
    const checkName = persons.find(props => props.name.toLowerCase() === newPerson.name.toLowerCase())
    const changedPerson = { ...checkName, number:newNumber}
  


    if (persons.some(newPerson => newPerson.number === newNumber)){
      window.alert(`the number ${newNumber} is already added to phonebook`);
    }
    else if (persons.some(newPerson => newPerson.name === newName)){
      if(window.confirm(`the name "${newName}" is already added to phonebook, do you want to update the number?`)) {
        personService
        .update(checkName.id,changedPerson)
        .then(returnedPerson => {
          setPersons(persons.map(n => n.id !== checkName.id? n : returnedPerson))

        })
      }
      
    }
    else {   
      personService
      .create(newPerson)
      .then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
      
    })}
      
    setNewName('');
    setNewNumber('');
  }

  

  const handlePersonChange = (event) => setNewName(event.target.value);
  const handeNumberChange = (event) => setNewNumber(event.target.value);

  return (
    <form onSubmit={addPerson}>
      <div>
        name:<input placeholder='Add person' value={newName}
          onChange={handlePersonChange} />
      </div>

      <div>number: <input placeholder='Add number' value={newNumber}
        onChange={handeNumberChange} /></div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )}
