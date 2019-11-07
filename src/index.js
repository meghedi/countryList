import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import countries from './countries.json';

let divStyle={ 
    "display": "flex", 
    "justifyContent": "center",
    "alignItems":"center" ,
    "marginTop": "5.5rem"
};

class CountryList extends Component {
    state = {
      countriesLists: [],
      selectedCountry : ""
    }
   
componentDidMount() { 
    let countriesLists = countries.map(country=> {return {value: country.code, displaytext:country.name}});
    this.setState({countriesLists:[{value:'', displaytext: 'Select one please...'}].concat(countriesLists)})
}
    

   
    render() {
      return (
        <div style={divStyle}>
          Country List: <select  value={this.state.selectedCountry} onChange={(e) => this.setState({selectedCountry: e.target.value})}>
          {this.state.countriesLists.map((country) => <option key={country.value} value={country.value}>{country.displaytext}</option>)}
          </select>
        </div>
      )
    }
  }


ReactDOM.render(<CountryList />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
