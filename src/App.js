import React from 'react';
import Main from './Main'
import './App.css';
import SideBar from './Navbar'
import Skills from './Skills'
import Projects  from './Projects'
import {Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <SideBar/>
      <Route path="/" exact render={()=>
                <Main/>
      }/>
      <Route path="/about" exact render={()=>
                <Skills/>
      }/>
      <Route path="/projects" exact render={()=>
                <Projects/>
      }/>

      
    </div>
  );
}

export default App;
