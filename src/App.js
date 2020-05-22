import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import './App.css';
import Particles from 'react-particles-js';
import Table from './Components/Table/Table';
import database from './database';
import SearchBox from './Components/SearchBox/SearchBox';
import Global from './Components/Global/Global';
import Graph from './Components/Graph/Graph';

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
          "Countries": database["Countries"],
          "Date": database["Date"]
        },
        searchfield: '',
        route: 'home'
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

  onRouteChange = (route) => {
    this.setState({route: route});
  }

  render() {
    const {searchfield, summary, route} = this.state;
    const countryList = summary["Countries"];
    const filteredCountries = countryList.filter(entry =>{
      return entry.Country.toLowerCase().includes(searchfield.toLowerCase())
    })
    if (summary.length === 0) {
      return <h1>Loading...</h1>
    } else if (route === 'home') {
      return (
      <div className="App">
        <Particles className="particles" params={particlesOptions} />
        <Navigation onRouteChange={this.onRouteChange} route={route}/>
        <Header/>
        <Global globalSummary={summary["Global"]}/>
        <SearchBox searchChange={this.onSearchChange}/>
        <Table Countries={filteredCountries}/>
      </div>
      )  
      } else if (route === 'graphs') {
      return(
        <div className="App">
          <Particles className="particles" params={particlesOptions} />
          <Navigation onRouteChange={this.onRouteChange} route={route}/>
          <Header/>
          <Graph Countries={countryList}/>
        </div>
      )
    }

  }
}

export default App;
