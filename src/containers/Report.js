import React, { Component } from "react";
import DetailedReport from "../components/DetailedReport";
import List from "../components/List";

class Report extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCountry: {
				original: {
					country: "Norway",
					total: "0",
					males: "0",
					females: "0"
				}
			}
		};
	}

	render() {
		return (
			<section className="section section-recent">
				<div className="row">
					<List
						countries={this.props.countries}
						onCountrySelect={selectedCountry =>
							this.setState({ selectedCountry })
						}
					/>
					<DetailedReport country={this.state.selectedCountry} />
				</div>
			</section>
		);
	}
}

export default Report;
