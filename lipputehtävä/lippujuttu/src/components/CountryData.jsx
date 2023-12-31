import WeatherData from "./WeatherData"

const CountryData = ({ country }) => {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <div>Pääkaupunki: {country.capital}</div>
        <div>Pinta-ala: {country.area} km²</div>
        <h3>Puhutut kielet:</h3>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`${country.name.common} flag`} />
        
      </div>
    );
  };
  
  export default CountryData