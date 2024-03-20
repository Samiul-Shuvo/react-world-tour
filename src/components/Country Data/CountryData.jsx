
const CountryData = ({country,handleVisitedCountry,handleVisitedFlags}) => {

    return (
        <div>
            {/* <p>Country Data : {country.name.common}</p> */}
            <p>Country Data : {country.name}</p>
        </div>
    )
};

export default CountryData;