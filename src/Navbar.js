import React,{Component} from 'react'
import {FaHome} from 'react-icons/fa'
import {BsInfoCircle} from 'react-icons/bs'
import {FiBook} from 'react-icons/fi'
import {Link} from 'react-router-dom'

class SideBar extends Component{
    state={
        home:true,
        about:false,
        projects:false,
    }
    handlehome=()=>{
        this.setState({home:true,about:false,projects:false})
    }
    handleabout=()=>{
        this.setState({home:false,about:true,projects:false})
    }
    handleprojects=()=>{
        this.setState({home:false,about:false,projects:true})
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
  </div>

)
    }
}
export default SideBar;