import _ from 'lodash';
import React from 'react';
const CanvasJSReact = require('../util/canvasjs.react');
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
const Chart = ({countries}) => {

	const mostPopulousCountries = _.orderBy(countries, ['total'],['desc']).slice(0, 10).map(({total, country}) => {
		return {y: total, label: country}
	});
	const dataPoints = [...mostPopulousCountries];


	const options = {
		animationEnabled: true,
		exportEnabled: true,
		theme: "light1",
		title:{
			text: "Top 10 Largest Countries by Population"
		},
		data: [{
			type: "pie",
			indexLabel: "{label}: {y}",		
			startAngle: -90,
			dataPoints
		}]
	}
	
	return (
	  <div className="col s12 m6 l7">
	    <div className="card-panel">
	      <CanvasJSChart options = {options}  style={{height: '300px', width: '100%'}}/>
	    </div>
	  </div>
	);
}
 
export default Chart;   