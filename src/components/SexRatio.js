import React, {Component} from 'react';

class SexRatio extends Component {
	constructor() {
		super()
		this.state = {
			country: ''
		}
	}

	componentDidMount() {
		function getCountries() {
	    return fetch('http://api.population.io/1.0/countries/').then(s => s.json())
		}

		function getPopulation(country) {
		    return fetch(encodeURI(`http://api.population.io:80/1.0/population/2018/Brazil/${country}`)).then(s => s.json())
		}

		(async () => {

		    try {

		        const { countries } = await getCountries();
		        const populations = await Promise.all(countries.map(getPopulation));

		        console.log(populations);

		    } catch(err) {
		        console.log(err);
		    }

		})();
	  fetch('https://jsonplaceholder.typicode.com/users')
	    .then(response=> response.json())
	    .then(users => {this.setState({ robots: users})});
	};

	render() {
		return(
			<div>hello</div>
		)
	}
}

export default SexRatio;