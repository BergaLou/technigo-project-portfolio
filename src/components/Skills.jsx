import React from "react";
import './Skills.css'

function Skills() {
    return (
        <section className="skills-section">
            <h2 className="section-title">Skills</h2>
            <div className="section-grid">

            <div className="code-skills">
            <h3>Code</h3>
            <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>Javascript ES6</li>
            <li>React</li>
            <li>Styled components</li>
            <li>Github</li>
            </ul>
            </div>

            <div className="toolbox-skills">
            <h3>Toolbox</h3>
            <ul>
            <li>Adobe Photoshop</li>
            <li>Lightroom</li>
            <li>Figma</li>
            <li>Slack</li>
            </ul>
            </div>

            <div className="upcoming-skills">
            <h3>Upcoming</h3>
            <ul>
            <li>Node.js</li>
            <li>Typescript</li>
            <li>AI Tools</li>
            <li>Adobe Illustrator</li>
            <li>Tailwind CSS</li>
            </ul>
            </div>
            
            <div className="more-skills">
            <h3>Personal Skills</h3>
            <ul>
            <li>UI Design</li>
            <li>Problem Solving</li>
            <li>Responsive Design</li>
            <li>Web Development</li>
            <li>Concept Thinking</li>
            <li>Adobe Photoshop</li>
            <li>Lightroom</li>
            </ul>
            </div>
            
          </div>
        </section>
    )
}

export default Skills;