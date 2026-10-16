import React, { use } from 'react';
import './Countries.css'
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
    const countries = use(countriesPromise)
    // console.log(countries);  // [{...}, {...}]




    return (

        <div>
            <h3 className='total'>Total Countries : {countries.length} </h3>

            <div className='country-container'>
                {
                    countries.map(country => <Country key={country.ccn3.ccn3} country={country}></Country>)
                }
            </div>


        </div>
    );
};

export default Countries;