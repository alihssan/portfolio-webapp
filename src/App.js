import React from 'react';
import Main from './Main'
import './App.css';
import SideBar from './Navbar'
import About from './About'
import Skills  from './Skills'
import {Route} from 'react-router-dom'
function App() {
  return (
    <div className="Appli">
      <SideBar/>
      <Route path="/" exact render={()=>
                <Main/>
      }/>
      <Route path="/about" exact render={()=>
                <About/>
      }/>
      <Route path="/skills" exact render={()=>
                <Skills/>
      }/>

      
    </div>
  );
}

export default App;
