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
    <div className = "icons__tabletcontainer">
        <div className="icons__container">
            <div className="icons__overlay">
                <img className="icons__img" src={html} alt=""/>
            </div>
            <div className="icons__overlay">
                <img className="icons__img" src={css} alt=""/>
            </div>
        </div>
        <div className="icons__container">
            <div className="icons__overlay">
                <img className="icons__img" src={sass} alt=""/>
            </div>
            <div className="icons__overlay">
                <img className="icons__img" src={javascript} alt=""/>
            </div>
        </div>
    </div>
    <div className = "icons__tabletcontainer">
        <div className="icons__container">
            <div className="icons__overlay">
                <img className="icons__img" src={react} alt=""/>
            </div>
            <div className="icons__overlay">
                <img className="icons__img" src={nodejs} alt=""/>
            </div>
        </div>
        <div className="icons__container">
            <div className="icons__overlay">
                <img className="icons__img" src={express} alt=""/>
            </div>
            <div className="icons__overlay">
                <img className="icons__img" src={mongo} alt=""/>
            </div>
        </div>
    </div>
    <div className = "icons__tabletcontainer">
        <div className="icons__container">
            <div className="icons__overlay">
                <img className="icons__img" src={gatsby} alt=""/>
            </div>
            <div className="icons__overlay">
                <img className="icons__img" src={graphql} alt=""/>
            </div>
        </div>
        <div className="icons__container">
            <div className="icons__overlay">
                <img className="icons__img" src={git} alt=""/>
            </div>
        </div>
    </div>
    </section>
)

export default Icons