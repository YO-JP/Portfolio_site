import React from 'react'
import Nav from '../components/nav'

const About = () => (
    <header className="header" id="top">
        <Nav />
        <div className="header__container">
          <h2 className="header__title">Hello World!</h2>
          <h3 className="header__name">I'm Yuta</h3>
          <p className="header__job">Web Developer</p>
        </div>
    </header>
)

export default About