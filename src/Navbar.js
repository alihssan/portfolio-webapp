import React,{Component} from 'react'
import {FaHome} from 'react-icons/fa'
import {BsInfoCircle} from 'react-icons/bs'
import {FiBook} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {FiGithub} from 'react-icons/fi'
import {GrLinkedin} from 'react-icons/gr'

class SideBar extends Component{
    state={
        home:true,
        about:false,
        projects:false,
        github:false,
        linkedin:false
    }
    handlehome=()=>{
        this.setState({home:true,about:false,projects:false,github:false,linkedin:false})
    }
    handleabout=()=>{
        this.setState({home:false,about:true,projects:false,github:false,linkedin:false})
    }
    handleprojects=()=>{
        this.setState({home:false,about:false,projects:true,github:false,linkedin:false})
    }
    handlegithub=()=>{
        this.setState({home:false,about:false,projects:false,github:true,linkedin:false})
    }
    handlelinkedin=()=>{
        this.setState({home:false,about:false,projects:false,github:false,linkedin:true})

    }
    render(){
        const style={
            marginTop:'7px',
        }
    return(
  <div className="sidebar">
    <Link to="/" onClick={this.handlehome}>
        <div 
            className="a" 
            style={{backgroundColor: this.state.home===true ? "black" : "transparent"}}
            > 
            <center> 
                <FaHome size={40} color="white" style={style}/>
            </center>
        </div>
    </Link>
    <Link to="/about" onClick={this.handleabout}> 
        <div 
            className="b" 
            style={{backgroundColor: this.state.about===true ? "black" : "transparent"}}
        > 
            <center>
                <BsInfoCircle size={40} color="white" style={style}/>
            </center>
        </div>
    </Link>
    <Link to="/projects" onClick={this.handleprojects}>
        <div 
            className="c" 
            style={{backgroundColor: this.state.projects===true ? "black" : "transparent"}}
        > 
            <center>
                <FiBook size={40} color="white" style={style}/>
            </center>
        </div>
    </Link>
    <a href="https://github.com/alihssan" onClick={this.handlegithub}>
        <div 
            className="d" 
            style={{backgroundColor: this.state.github===true ? "black" : "transparent"}}
        > 
            <center>
                <FiGithub size={40} color="white" style={style}/>
            </center>
        </div>
    </a>
    <a href="https://www.linkedin.com/in/ali-hassan-002238157/" onClick={this.handlelinkedin}>
        <div 
            className="e" 
            style={{backgroundColor: this.state.linkedin===true ? "black" : "transparent"}}
        > 
            <center>
                <GrLinkedin size={40} color="white" style={style}/>
            </center>
        </div>
    </a>
  </div>

)
    }
}
export default SideBar;