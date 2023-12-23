export const Lista = (personsToShow,onDelete) => {

    return(
      <ul>
        {personsToShow.map((person, index) => (
          <li key={index}>  {person.name} {person.number}    
          <button onClick={() => onDelete(person.id,person.name)}>
            <img src="src\assets\trash-347.png"></img>
        </button>
        </li>
        ))}

      </ul>
      
    );

};
