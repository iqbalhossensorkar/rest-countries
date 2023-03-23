import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    const {name, population, area, region, flags} = props.country;
    return (
        <div className='country'>
            <h1>Country Name: {name.common}</h1>
            <img src={flags.png} alt="" style={{width:"100px"}}/>
            <h3>Population: {population}</h3>
            <p><small>Area: {area}</small></p>


            <p>Region: {region}</p>
        </div>
    );
};

export default Country;