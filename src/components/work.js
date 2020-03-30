import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Work = () => {
  const data = useStaticQuery(graphql`
    query {
      streamvalue: file(relativePath: { eq: "streamvalue.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
        }
        portfolio: file(relativePath: { eq: "portfolio.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
            }
      }
  `)

  return (
    <section className="work" id="work">
      <h2 className="work__heading">RECENT WORK</h2>
          <div className="work__container">
            <h3 className="work__title">StreamValue</h3>
            <Img fluid={data.streamvalue.childImageSharp.fluid} />
            <ul className="work__list">
              <li>MongoDB</li>
              <li>Express</li>
              <li>React</li>
              <li>Node.js</li>
            </ul>
            <div className="work__links">
                <a className="work__button" href="http://streamvalue.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                <a className="work__button" href="https://github.com/YO-JP/streamvalue" target="_blank" rel="noopener noreferrer">Repo</a>
                <a className="work__button" href="" target="_blank" rel="noopener noreferrer">Process</a>
            </div>
          </div>
          <div className="work__container">
            <h3 className="work__title">My Portfolio</h3>
            <Img fluid={data.portfolio.childImageSharp.fluid} />
            <ul className="work__list">
              <li>React</li>
              <li>Gatsby</li>
              <li>Sass</li>
            </ul>
            <div className="work__links">
                <a className="work__button" href="http://yutaobara.com/" target="_blank" rel="noopener noreferrer">Live Site</a>
                <a className="work__button" href="https://github.com/YO-JP/Portfolio_site" target="_blank" rel="noopener noreferrer">Repo</a>
                <a className="work__button" href="" target="_blank" rel="noopener noreferrer">Process</a>
            </div>
          </div>
    </section>
  )
}

export default Work;