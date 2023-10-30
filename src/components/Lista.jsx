import axios from 'axios';
import notes from '../services/notes'
export const Lista = (personsToShow,setPersons,persons) => {
  const baseUrl = 'http://localhost:3001/persons'
  const Remove = (id,setPersons,name) => {
    if(window.confirm(`Poistetaanko ${name}?`)) {
      console.log(`poistettu ${id} listasta`);
      notes.remove(id)
          .then(() => {
            const updatedPersons = persons.filter(person => person.id !== id);
          setPersons(updatedPersons);})}}

    return(
      <ul>
        {personsToShow.map((person, index) => (
          <li key={index}>  {person.name} {person.number}    
          <button onClick={() => Remove(personsToShow[index].id,setPersons,personsToShow[index].name)}>
            <img src="src\assets\trash-347.png"></img>
        </button>
        </li>
        ))}

      </ul>
      
    );

};
