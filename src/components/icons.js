import React from 'react'
import javascript from '../images/javascript.svg'
import gatsby from '../images/gatsby.svg'
import graphql from '../images/graphql.svg'
import express from '../images/express.svg'
import nodejs from '../images/nodejs-icon.svg'
import sass from '../images/sass.svg'
import html from '../images/html-5.svg'
import css from '../images/css-3.svg'
import mongo from '../images/mongodb.svg'
import react from '../images/react.svg'
import git from '../images/git-icon.svg'

const Icons = () => (
    <section className="icons">
        <div className="icons__container">
            <div className="icons__overlay">
                <img className="icons__img" src={html} alt=""/>
                <p className="icons__description">HTML5</p>
            </div>
            <div className="icons__overlay">
                <img className="icons__img" src={css} alt=""/>
                <p className="icons__description">CSS3</p>
            </div>
        </div>
        <div className="icons__container">
            <div className="icons__overlay">
                <img className="icons__img" src={sass} alt=""/>
                <p className="icons__description">SASS</p>
            </div>
            <div className="icons__overlay">
                <img className="icons__img" src={javascript} alt=""/>
                <p className="icons__description">Javascript</p>
            </div>
        </div>
        <div className="icons__container">
            <div className="icons__overlay">
                <img className="icons__img" src={react} alt=""/>
                <p className="icons__description">React</p>
            </div>
            <div className="icons__overlay">
                <img className="icons__img" src={nodejs} alt=""/>
                <p className="icons__description">Node.js</p>
            </div>
        </div>
        <div className="icons__container">
            <div className="icons__overlay">
                <img className="icons__img" src={express} alt=""/>
                <p className="icons__description">Express</p>
            </div>
            <div className="icons__overlay">
                <img className="icons__img" src={mongo} alt=""/>
                <p className="icons__description">MongoDB</p>
            </div>
        </div>
        <div className="icons__container">
            <div className="icons__overlay">
                <img className="icons__img" src={gatsby} alt=""/>
                <p className="icons__description">Gatsby</p>
            </div>
            <div className="icons__overlay">
                <img className="icons__img" src={graphql} alt=""/>
                <p className="icons__description">GraphQL</p>
            </div>
        </div>
        <div className="icons__container">
            <div className="icons__overlay">
                <img className="icons__img" src={git} alt=""/>
                <p className="icons__description">Git</p>
            </div>
        </div>
    </section>
)

export default Icons