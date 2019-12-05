import React, { Component } from 'react';
import MapContainer from './containers/MapContainer';
import CategoryDropDown from './components/category';

import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container h-100">
          {/* <MapContainer /> */}
          <CategoryDropDown />
        </div>
      </div>
    );
  }
}

export default App;
