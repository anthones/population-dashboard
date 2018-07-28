import React from 'react';
import DetailedReport from './DetailedReport';
import List from './List';

const Report = (countries) => {
	return(
		<div>
			<div>Report</div>
			<List countries={countries}/>
			<DetailedReport />
		</div>
	)	
}

export default Report;