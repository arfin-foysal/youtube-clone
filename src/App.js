import React from 'react'
import './App.css';
import Header from'./Components/Header'
import Sidebar from './Components/Sidebar';
import RecoVideo from './Components/RecoVideo';
import Search from './Components/Search';
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
