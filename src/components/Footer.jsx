import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-wrapper">
            <section className="footer-container">
                <div className="footer-intro-content">
                    <p className="footer-intro-text">
                        I look forward to a positive response and the opportunity to meet and tell you more about myself.
                    </p>

                <div className="contact-info">
                    <p>Clara Högberg</p>
                        <p>+46(0)734666069 (SMS) </p>
                    <a href="mailto:Clara.Hogberg1993@gmail.com">Clara.Hogberg1993@gmail.com</a>
                </div>
            </div>
                <div className="portfolio-footer-img">
                    <img src ="./assets/portratt3.png" alt="other pic of me" className="portrait"
                />
                </div>
            </section>
        </div>
    )
}

export default Footer;