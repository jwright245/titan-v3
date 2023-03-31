import React from 'react'
import MainVideo from '../../assets/video.mp4'
import './Hero.css'


const hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4'/>
            </video>
            <div className="hero-text">
                <h1><span className="blue">Software/IT </span>Dev Tools</h1>
                <p>Build, Share, Explore and Level Up Your Workflow</p>
                <div className="btn-group">
                    <button className="btn">Learn More</button>
                    {/* <button className="btn btn-outline">Documentation</button> */}
                    <button className="btn btn-outline">Get Started</button>
                </div>
            </div>
            <div className="bottom-text">
                <h2>Coding Languagues: </h2>
            </div>
            
        </div>
        
       
    )
}

export default hero
