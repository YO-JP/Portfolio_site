import React from 'react'

import linkedin from './../images/linkedin.svg'
import git from './../images/github.svg'
import gmail from './../images/gmail.svg'
import resume from './../images/resume.png'

const Footer = () => (
    <footer className="footer">
            <ul className="footer__list">
                <li className="footer__option">
                    <a href="https://www.linkedin.com/in/yutaobara/" target="_blank" rel="noopener noreferrer">
                    <img className="footer__img" src={linkedin} alt="LinkedIn" /></a>
                </li>
                <li className="footer__option">
                    <a href="https://github.com/YO-JP/" target="_blank" rel="noopener noreferrer">
                    <img className="footer__img" src={git} alt="GitHub" /></a>
                </li>
                <li className="footer__option">
                    <a href="mailto:o.yuta722@gmail.com">
                    <img className="footer__img" src={gmail} alt="Gmail" /></a>
                </li>
                <li className="footer__option">
                <a href="https://google.com" target="_blank" rel="noopener noreferrer">
                    <img className="footer__img" src={resume} alt="Resume" /></a>
                </li>
            </ul>
            <div className="footer__copyright">
                <p>&copy; 2020 Yuta Obara</p>
            </div>
    </footer>
)

export default Footer
