import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";

const List = ({countries, onCountrySelect}) => {

	return(
    <div className="col s12 l8 m6">
      <div className="card">
        <div className="card-content">
          <span className="card-title">List of all the countries of the world! Click on a country for more information.</span>
					<ReactTable
						data={countries}
						columns={[
							{
								Header: "Country Name",
								accessor: "country",
							},
							{
								Header: "Total Population",
								accessor: "total",
							},					
							{
								Header: "Total Male Population",
								accessor: "males",
							},					
							{
								Header: "Total Female Population",
								accessor: "females",
							},
						]}
						getTdProps={(state, {original}) => {
		            return {
		              onClick: e => {
		              	onCountrySelect({original});
		              }
		            }
		          }
		        }
		        style={{cursor: "pointer"}}
						defaultPageSize={15}
		        className="-striped -highlight responsive-table"
		      />
      </div>
    </div>
  </div>
	)	
};

export default List;