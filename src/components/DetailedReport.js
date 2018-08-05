import React from 'react';
import isoCountries from '../util/CountryCodes';


const DetailedReport = ({country}) => {
  const getCountryName = (countryName) => {
    if (isoCountries.hasOwnProperty(countryName)) {
        return `https://countryflags.io/${isoCountries[countryName]}/flat/64.png`;
    } else {
        return "https://www.emojirequest.com/images/SweatingEmoji.jpg";
    }
  }

	return(
    <div className="row">
      <div className="col s12 m6 l4">
        <div className="card">
          <div className="card-image">
            <img src={getCountryName(country.original.country)} alt={country.original.country}/>
          </div>
          <div className="card-content">
            <h5>Some more information about {country.original.country}</h5>
            <ul className="collection">
              <li className="collection-item">Total population: {country.original.total.toLocaleString('de-DE')}</li>
              <li className="collection-item">Total male population: {country.original.males.toLocaleString('de-DE')}</li>
              <li className="collection-item">Total female population: {country.original.females.toLocaleString('de-DE')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
	);
}

export default DetailedReport;