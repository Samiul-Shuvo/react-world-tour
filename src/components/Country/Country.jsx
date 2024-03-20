import { useState } from 'react';
import './Country.css'
import CountryDetails from '../Country Details/CountryDetails';
const Country = ({country,handleVisitedCountry,handleVisitedFlags}) => {
    const {name,flags,population,area,cca3} = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited);
    }

    const passWithParam = () =>{
        handleVisitedCountry(country);

    }

    return (
        <div className={`country ${visited? 'visited' : 'non-visited'}`}>
            <h3 style={{color : visited ? 'purple':'white'}}>Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={passWithParam}>Mark Visited</button> <br />
            <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add Flags</button><br />
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            {
                visited ? 'Already Visited' : 'I want to visit.'
            }
            <hr />
            <CountryDetails 
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}

            ></CountryDetails>
        </div>
    );
};

export default Country;