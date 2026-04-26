import React from 'react';
import './Hero.css'

function Hero() {
    return (
        <section className="hero-container">
            
            <div className="hero-top-row">
            <img src="./assets/profil4.png" alt="My profile pic of me" className="hero-image"
            />
            <h2 className="hero-name">Clara Högberg</h2>
            </div>

            <div className="social-links">
                <img src="./assets/Linkedin.png"
                alt="Linkedin"
                className="social-icon"
                />
                <img src="./assets/Github.png"
                alt="Github"
                className="social-icon"
                />
            </div>

            <div className="hero-text-wrapper">
            <h2>Hello,  I am a Junior</h2>
            <h1>Fullstack
                Developer</h1>
            <p>I am a Fullstack Developer student at Technigo. I care deeply about details and I always want everything to work perfectly.</p>

            <p>I work with the whole chain, from design <i>(frontend)</i> to logic and databases <i>(backend)</i>. When I face a problem, I don’t give up until I find a good solution. I love learning new things and I want to work on projects where quality is important.</p>
            </div>

        </section>
    )
}

export default Hero;