import React from 'react';
import './Country.css'

const Country = ({ country }) => {
    console.log(country);  // returns object

    const handleVisited = () => {
        console.log("Btn clicked");
    }




    return (
        <div className='country-card'>

            <div className='image-div'>
                <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            </div>

            <div className='more-info'>
                <h4 >Name : {country.name.common}</h4>
                <h6>Area : {country.area.area} km&sup2;</h6>
            </div>

            <div className='population-div'>
                <h6>{country.population.population}</h6>
                <p>
                    {country.population.population > 50000
                        ? <><i className="fa-solid fa-users"></i> High</>
                        : <><i className="fa-solid fa-user"></i> Low</>
                    }
                </p>
            </div>

            <div className="footer">
                <button onClick={handleVisited} >Visited</button>
            </div>

        </div>
    );
};

export default Country;