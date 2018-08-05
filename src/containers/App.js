import _ from "lodash";
import axios from "axios";
import nonCountries from "../util/NonCountries";

import React, { Component } from "react";
import Report from "./Report";
import Dashboard from "../components/Dashboard";
import Nav from "../components/Nav";
import Loader from "../components/Loader";

import "materialize-css/dist/css/materialize.min.css";
import "./App.sass";

const arrayOfCountries = [];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      selectedCountry: null
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://cors-anywhere.herokuapp.com/http://api.population.io:80/1.0/countries"
      )
      .then(response => {
        response.data.countries.map(country => {
          if (!_.includes(nonCountries, country)) {
            axios
              .get(
                `https://cors-anywhere.herokuapp.com/http://api.population.io:80/1.0/population/2018/${country}`
              )
              .then(response => {
                const newPopulation = response.data
                  .map(arr => arr)
                  .reduce((acc, cur) => {
                    if (!acc.country) acc.country = cur.country;
                    acc.total = acc.total
                      ? (acc.total += cur.total)
                      : cur.total;
                    acc.males = acc.males
                      ? (acc.males += cur.males)
                      : cur.males;
                    acc.females = acc.females
                      ? (acc.females += cur.females)
                      : cur.females;
                    return acc;
                  }, {});

                arrayOfCountries.push(newPopulation);

                const newState = Object.assign([], this.state, {
                  countries: arrayOfCountries
                });
                if (newState.countries.length >= 204) this.setState(newState);
              })
              .catch(error => console.log(error));
          } else {
            return false;
          }
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    if (this.state.countries.length === 0) {
      return <Loader />;
    } else {
      return (
        <div className="App grey lighten-4">
          <Nav />
          <Dashboard countries={this.state.countries} />
          <Report
            countries={this.state.countries}
            selectedCountry={this.state.selectedCountry}
          />
          <footer className="section blue darken-2 white-text center">
            <p>
              Made with <span style={{ color: "#e25555" }}>&#x2764;</span> in{" "}
              <img src="https://countryflags.io/mk/flat/16.png" alt="flag" /> by
              Antonie, 2018
            </p>
          </footer>
        </div>
      );
    }
  }
}

export default App;
