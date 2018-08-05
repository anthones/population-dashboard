import _ from "lodash";
import React from "react";
const CanvasJSReact = require("../util/canvasjs.react");
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const SexRatio = ({ countries }) => {
	const femaleToMaleRatioArray = countries.map(
		({ males, females, country }) => {
			let ratio = females / males;
			return { y: ratio, label: country };
		}
	);
	const dataPoints = _.orderBy(femaleToMaleRatioArray, ["y"], ["desc"]).slice(
		0,
		10
	);

	const options = {
		animationEnabled: true,
		exportEnabled: true,
		theme: "light2",
		title: {
			text: "Top 10 countries by female to male ratio"
		},
		axisY: {
			interval: 0.05
		},
		data: [
			{
				type: "column",
				indexLabelFontColor: "#5A5757",
				indexLabelPlacement: "outside",
				dataPoints
			}
		]
	};

	return (
		<div className="col s12 m6 l6 line-graph">
			<CanvasJSChart options={options} style={{ height: "470px" }} />
		</div>
	);
};

export default SexRatio;
