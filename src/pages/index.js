import React from "react"
import { Link } from "gatsby"
import '../styles/styles.scss'

import SEO from "../components/seo"
import Header from '../components/header'
import About from '../components/about'
import Work from '../components/work'
import Footer from "../components/footer"
import Contact from "../components/contact"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    <Header />
    <About />
    <Work />
    <Contact />
    <Footer />
  </div>
)

export default IndexPage
