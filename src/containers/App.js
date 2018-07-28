import React, { Component } from 'react';
import Dashboard from '../components/Dashboard';
import Report from '../components/Report';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  async componentDidMount() {
    fetch('//api.population.io:80/1.0/countries')
      .then(response => response.json())
      .then(c => {this.setState(c)})
  }

  render() {
    return (
      <div className="App">

        {this.state.countries}
      </div>
    )
  }
}

export default App;
