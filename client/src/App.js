import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import {DataProvider} from './GlobalState'
import Header from './components/headers/Header'
import Slider from './components/slider/Slider'
import MainPages from './components/mainpages/Pages'
import { Route } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={Slider}/>
         
          <MainPages />
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
