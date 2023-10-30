import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const[country, setCountry] = useState('')
  const[result, setResult] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setResult(response.data)
      })
}, [])

const handleCountryChange = (event) => {
  setCountry(event.target.value)
}

  return (
    <>
      <h1>Lippujuttu</h1>
      <div className='keskus'>
        <p>Find countries</p>
        <form>Find countries!
         <input value={country} onChange={handleCountryChange} />
        </form>
      </div>
      <ul>

      </ul>
    </>
  )
}

export default App
