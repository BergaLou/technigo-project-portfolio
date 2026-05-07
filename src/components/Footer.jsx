import React from "react";
import "./Footer.css";
import lastphoto from '../../assets/portratt3.png';
import linkedinlogo from '../../assets/linkedin2.png';
import githublogo from '../../assets/github2.png';

function Footer() {
    return (
        <div className="footer-wrapper">
            <section className="footer-container">
                <div className="footer-intro-content">
                    <p className="footer-intro-text">
                        I look forward to a positive response and the opportunity to meet and tell you more about myself.
                    </p>

                <div className="contact-info">
                    <h3>Clara Högberg</h3>
                        <p>+46(0)734 666 069 (SMS) </p>
                    <a href="mailto:Clara.Hogberg1993@gmail.com">clara.hogberg1993@gmail.com</a>
                <div className="social-links-footer">
                <a href="https://www.linkedin.com/in/bergalou" target="_blank" rel="noreferrer" className="social-link-footer">
                <img src={linkedinlogo}
                alt="Linkedin"
                className="social-icon"
                />
                </a>
                <a href="https://github.com/BergaLou" target="_blank" rel="noreferrer" className="social-link-footer">
                <img src={githublogo}
                alt="Github"
                className="social-icon"
                />
                </a>
            </div>
                </div>
            </div>
                <div className="portfolio-footer-img">
                    <img src ={lastphoto} alt="other pic of me" className="portrait"
                />
                </div>
            <div className="signature-wrapper">
              <img src="./assets/Underskriftet.png" alt="My signature" className="signature-image"
            />
            </div>
            </section>
        </div>
    )
}

export default Footer;