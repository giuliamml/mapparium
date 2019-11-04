import React, { Component } from 'react';
import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Rome from './Rome';
import Pompeii from './Pompeii';
import Aquileia from './Aquileia';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/rome' component={Rome} />
            <Route exact path='/pompeii' component={Pompeii} />
            <Route exact path='/aquileia' component={Aquileia} />
            
          </Switch>

        </div>
      </Router>
      

      

      
    


     

     


    );

  }
}





export default App;
