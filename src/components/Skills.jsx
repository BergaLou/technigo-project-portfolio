import React from "react";
import './Skills.css'

function Skills() {
    return (
        <section className="skills-section">
            <h2 className="section-title">Skills</h2>
            <div className="section-grid">

            <div className="code-skills">
            <h3>Code</h3>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>Javascript ES6</p>
            <p>React</p>
            <p>Styled components</p>
            <p>Github</p>
            </div>

            <div className="toolbox-skills">
            <h3>Toolbox</h3>
            <p>Adobe Photoshop</p>
            <p>Lightroom</p>
            <p>Figma</p>
            <p>Slack</p>
            </div>

            <div className="upcoming-skills">
            <h3>Upcoming</h3>
            <p>Node.js</p>
            <p>Typescript</p>
            <p>AI Tools</p>
            <p>Adobe Illustrator</p>
            </div>
            
            <div className="more-skills">
            <h3>Personal Skills</h3>
            <p>UI Design</p>
            <p>Problem Solving</p>
            <p>Responsive Design</p>
            <p>Web Development</p>
            <p>Concept Thinking</p>
            <p>Adobe Photoshop</p>
            <p>Lightroom</p>
            </div>
            
          </div>
        </section>
    )
}

export default Skills;