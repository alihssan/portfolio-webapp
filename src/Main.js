import React,{Component} from 'react'
import Typist from 'react-typist'
import {BsLightningFill} from 'react-icons/bs'
import {MdDeveloperMode} from 'react-icons/md'
import {FaRobot} from 'react-icons/fa'
import Fade from 'react-reveal'


export default class Main extends Component{
    render(){
        return(
            <div className="cover">
                <Typist><h1>Hello World By Ali Hassan,</h1></Typist>
                <Fade bottom><h3><MdDeveloperMode size={50} color={"red"}/>&nbsp;&nbsp;Front End Web Developer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<BsLightningFill size={50} color={"yellow"}/>&nbsp;&nbsp;Electrical Engineer&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<FaRobot size={50} color={"navy"}/>&nbsp;&nbsp; Deep Learning Enthusiast  </h3></Fade>
            </div>
        )
    }
}