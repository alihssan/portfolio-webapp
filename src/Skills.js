import React,{Component} from 'react'
import bracketopen from './bracketopen.png'
import bracketclose from './bracketclose.png'
import Fade from 'react-reveal'




export default class Skills extends Component{
    render(){
        return(
            <div className="cover2">
                <img className="open" src={bracketopen} alt="open"/>
                <h1 className="about">About Me,</h1>
                <Fade bottom><p>I am a Frontend Web Developer with Experience in 
                working with New Frontend Technologies and Looking forward to add Backend 
                and Cloud Native Technologies to my developers Stack.
                Highly Passionate About Applying and Learning DL/ML on Cloud Native Mobile & Webs.
                Exploring IoT and Highly Interested in Integrating these Technologies into Single 
                Product.  </p></Fade>
                <img className="close" src={bracketclose} alt="close"/>

            </div>
        )
    }
}