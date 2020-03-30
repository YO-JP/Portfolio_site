import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Streamvalue = () => (
  <div className="pagetwo">
    <SEO title="StreamValue" />
    <Link className="pagetwo__home" to="/">Go back to HOME</Link>
    <h1 className="pagetwo__heading">Hi from the second page</h1>
    <p className="pagetwo__paragraph">Welcome to page 2</p>
  </div>
)

export default Streamvalue
