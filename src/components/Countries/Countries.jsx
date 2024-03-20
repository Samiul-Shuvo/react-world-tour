
import { useState } from 'react'
import { useEffect } from 'react';
import Country from '../Country/Country';
import './Counries.css'


const Countries = () => {

    const [countries,setCountries] = useState([]);
    const [visitedCountries,setVisitedCountries] = useState([]);
    const [visitedFlags,setVisitedFlags] = useState([]);
    useEffect(()=>{
      fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data))
    },[]);

    const handleVisitedCountry = country =>{
     const newVisitedCountry = [...visitedCountries,country];
     setVisitedCountries(newVisitedCountry);
    }
    // For Flags
    const handleVisitedFlags = flag =>{
        const newVisitedFlags = [...visitedFlags,flag]
        setVisitedFlags(newVisitedFlags);
    }
    
    return (
        <div>
            <h3>Countries : {countries.length}</h3>
            {/* Visited Countries */}
            <div>
                <h3>Visited Countries : {visitedCountries.length}</h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>
            {/* Disolay Flags */}
            <div className='flag-container'>
                {
                    visitedFlags.map((flag,idx) => <img key={idx} src={flag} ></img>)
                }
            </div>
            {/* display Countries */}
            <div className='country-container'>
            {
                countries.map(country => <Country 
                    key={country.cca3}
                     country={country} 
                    handleVisitedCountry={handleVisitedCountry} 
                    handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;