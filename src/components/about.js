import React from 'react'
import Icons from '../components/icons'

const About = () => (
    <section className="about" id="about">
        <h2 className="about__heading">ABOUT ME</h2>
        <div className="about__description">
            <p className="about__paragraph">I'm a full stack web developer based in Toronto.</p>
            <p className="about__paragraph">I love the process of converting ideas into products!</p>
            <p className="about__paragraph">You can find me watching anime, eating ramen or wailing away at the punching bag.</p>
        </div>
        <h3 className="about__subheading">SKILLS</h3>
        <Icons />
    </section>
)

export default About