import React,{Component} from 'react'
import { Progress } from 'semantic-ui-react'
import Fade from 'react-reveal'


export default class Skills extends Component{
    render(){
        return(
            <div className="cover3">
                <div className="skills">
                    <Fade left><h2>HTML</h2></Fade>
                    <Fade bottom><Progress percent={100} inverted color='red' size="large" progress /></Fade>
                    <Fade left><h2>CSS</h2></Fade>
                    <Fade bottom><Progress percent={100} inverted color='orange' size="large" progress /></Fade>
                    <Fade left><h2>Javascript(ES6)</h2></Fade>
                    <Fade bottom><Progress percent={90} inverted color='yellow' size="large" progress /></Fade>
                    <Fade left><h2>Python</h2></Fade>
                    <Fade bottom><Progress percent={85} inverted color='green' size="large" progress /></Fade>
                    <Fade left><h2>ReactJS</h2></Fade>
                    <Fade bottom><Progress percent={85} inverted color='blue' size="large" progress /></Fade>
                    
                </div>
            </div>
        )
    }
}