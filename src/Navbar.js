import React,{Component} from 'react'
import {FaHome} from 'react-icons/fa'
import {BsInfoCircle} from 'react-icons/bs'
import {FiBook} from 'react-icons/fi'
import {Link} from 'react-router-dom'
import {FiGithub} from 'react-icons/fi'
import {GrLinkedin} from 'react-icons/gr'
import {withRouter} from 'react-router-dom'
class SideBar extends Component{
    state={
        github:false,
        linkedin:false
    }
    handlegithub=()=>{
        this.setState({github:true})
    }
    handlelinkedin=()=>{
        this.setState({linkedin:true})

    }
    render(){
        const style={
            marginTop:'7px',
        }
        console.log(this.props.location.pathname)
    return(
  <div className="sidebar">
    <Link to="/">
        <div 
            className="a" 
            style={{backgroundColor: this.props.location.pathname==='/' ? "black" : "transparent"}}
            > 
            <center> 
                <FaHome size={40} color="white" style={style}/>
            </center>
        </div>
    </Link>
    <Link to="/about"> 
        <div 
            className="b" 
            style={{backgroundColor: this.props.location.pathname==='/about' ? "black" : "transparent"}}
        > 
            <center>
                <BsInfoCircle size={40} color="white" style={style}/>
            </center>
        </div>
    </Link>
    <Link to="/skills">
        <div 
            className="c" 
            style={{backgroundColor: this.props.location.pathname==='/skills' ? "black" : "transparent"}}
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
export default withRouter(SideBar);