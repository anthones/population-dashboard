import React from 'react';
import Chart from './Chart';
import SexRatio from './SexRatio';

const Dashboard = ({countries}) => {
	return(
		<section className="section section-visitors blue lighten-4">
	    <div className="row">
				<SexRatio countries={countries}/>
				<Chart countries={countries}/>
			</div>
		</section>
	)	
}

export default Dashboard;