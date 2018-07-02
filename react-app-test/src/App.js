import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import configureStore from './store/store';
import { Provider } from 'react-redux';
import  Municipio  from './components/Municipio'

class App extends Component {

  constructor(){
    super();
  }

  render() {
    return (
      <Provider store={configureStore()}>
        <div className="App">
          <Municipio/>
        </div>
      </Provider>
    );
  }
}

export default App;
