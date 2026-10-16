import React, { use, useState } from 'react';
import './Countries.css'
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise)
    // console.log(countries);  // [{...}, {...}]
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])


    const handleVisitedFlags = (country) => {
        // console.log("Add Flags button clicked >", country);
        const newvisitedFlags = [...visitedFlags, country]
        setVisitedFlags(newvisitedFlags)

    }

    const handleVisitedCountries = (country) => {
        // console.log("visited country clicked", country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }


    return (

        <section className='countries-section'>


            <div className='section-heading'>
                <h3 className='total'>Total Countries : {countries.length} </h3>
            </div>


            <div className='main-container'>

                {/* Right side */}
                <div className='rightside-info-container'>

                    {/* Part -01 */}
                    <div className='info-card-container'>
                        <h4>Total Visited Countries : {visitedCountries.length}</h4>
                        <ol className='flags-ol'>

                            {
                                visitedCountries.map(country =>
                                    <li key={country.ccn3.ccn3}>{country.name.common}</li>)
                            }
                        </ol>
                    </div>

                    {/* Part -02 */}
                    <div className='flags-image'>
                        <h5>Total Visited Flags : {visitedFlags.length}</h5>
                            {
                                visitedFlags.map(country =>
                                    <div className='info-img-div'>
                                        <img key={country.ccn3.ccn3} src={country.flags.flags.png} alt={country.flags.flags.alt} />
                                    </div>
                                )
                            }
                    </div>

                </div>




                {/* Left Side */}
                <div className='country-container'>
                    {
                        countries.map(country => <Country
                            key={country.ccn3.ccn3}
                            country={country}
                            handleVisitedCountries={handleVisitedCountries}
                            handleVisitedFlags={handleVisitedFlags}>

                        </Country>)
                    }
                </div>


            </div>

        </section>
    );
};

export default Countries;