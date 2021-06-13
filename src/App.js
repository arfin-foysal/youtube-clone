import React from 'react'
import './App.css';
import Header from './Header'
import Sidebar from './Sidebar';
import RecoVideo from './RecoVideo';
import Search from './Search';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Switch>
          <Route path="/search/:searchTerm">
          <div className="app_body">
          <Sidebar/>
          <Search/>
          </div>
         
          </Route>
        <Route path="/">
        <div className="app_body">
        <Sidebar/>
         <RecoVideo/>
     </div>
        </Route>

        </Switch>
      </Router>
  
    
    
    </div>
  );
}

export default App;
