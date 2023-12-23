import { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from "./components/Countries"
import CountryData from './components/CountryData'
import './App.css'

function App() {
  const[countries, setCountries] = useState('')
  const[query, setQuery] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([]);

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
}, [])

const handleQueryChange = (event) => {
  const haku = event.target.value;
  setQuery(event.target.value)
  setCountriesToShow(
    countries.filter((country) =>
    country.name.common.toLowerCase().includes(haku.toLowerCase()))
  )
}

  return (
    <>
      <h1>Lippujuttu</h1>
      <div className='keskus'>
        <p>Valtiohaku</p>
        <form>Hae maita! 
         <input value={query} onChange={handleQueryChange} />
        </form>
        <div>
          {countriesToShow.length === 1 ? (
            <CountryData country={countriesToShow[0]} />
          ) : null}
          {countriesToShow.length > 10 ? (
            <div> Liikaa vaihtoehtoja, tarkenna hakua </div>
          ) : (
            <Countries
            countriesToShow={countriesToShow}
            setCountriesToShow={setCountriesToShow}
            />
          )}
        </div>
      </div>
      <ul>

      </ul>
    </>
  )
}

export default App
