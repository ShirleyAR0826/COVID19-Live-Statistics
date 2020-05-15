import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import './App.css';
import Particles from 'react-particles-js';
import Table from './Components/Table/Table';
import database from './database';
import SearchBox from './Components/SearchBox/SearchBox';
import Global from './Components/Global/Global';

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800,
      }
    }
   }
  }

class App extends Component {  
  constructor() {
    super()
    this.state = {
        summary: {
          "Global": database["Global"],
          "Countries": database["Countries"]
        },
        searchfield: ''
    }
  }

  componentDidMount(){
    fetch('https://api.covid19api.com/summary')
        .then(response => response.json())
        .then(data => this.setState({summary: data}));
  }

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const {searchfield, summary} = this.state;
    const countryList = summary["Countries"];
    const filteredCountries = countryList.filter(entry =>{
      return entry.Country.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (summary.length === 0) {
      return <h1>Loading...</h1>
    } else {
    return (
    <div className="App">
      <Particles className="particles" params={particlesOptions} />
      <Navigation/>
      <Header/>
      <Global globalSummary={summary["Global"]}/>
      <SearchBox searchChange={this.onSearchChange}/>
      <Table Countries={filteredCountries}/>
    </div>
    );  
    }
  }
}

export default App;
