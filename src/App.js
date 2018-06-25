import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Header from './components/Header';
import Displayphotos from './components/Displayphotos';
import Notfound from './components/Notfound';
class App extends Component {
  
  render() { 
    return (
    <BrowserRouter forceRefresh={true}>
      <div className="container">
      <Route path ="/" component={Header} />
      <Switch>
        <Route path ="/search/:searchterm" render={ props => <Displayphotos term={ props.match.params.searchterm }/> } /> 
        <Route exact path ="/" render={ props => <Displayphotos term='paloverde'/> } /> 
        <Route component={Notfound}/>
      </Switch>
      </div>

    </BrowserRouter>
    );
  }
}

export default App;
