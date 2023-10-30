import personService from '../services/notes'
import { useState } from 'react';

export function AddPerson(persons, setPersons) {
  const [newName, setNewName] = useState('');

  const [newNumber, setNewNumber] = useState('');

  const addPerson = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };

    if (persons.some(newPerson => newPerson.name === newName))
      window.alert(`${newName} is already added to phonebook`);

    else if (persons.some(newPerson => newPerson.number === newNumber))
      window.alert(`${newNumber} is already added to phonebook`);

    else (
      setPersons([...persons, newPerson]),
      personService
      .create(newPerson)
      .then(Response => {
      
        console.log(Response)
      }))
      
    setNewName('');
    setNewNumber('');

  };

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
  );
}
