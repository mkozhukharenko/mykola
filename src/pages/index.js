import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Mykola Kozhuharenko website" />
    <h1>Hi, I'm Mykola Kozhuharenko</h1>
    <p>I'm want help humankind and every single human to become aware of their subconscious processes. 
      So, to avoid wars and unnecessary violence, promote cooperation so we, finally, can venture beyond the Earth</p> 
    <p></p>
    <p>
      <b>I'd really appreciate you <Link to="/support/">SUPPORT</Link></b> <br />
      If you have any question, please, <Link to="/contacts/">CONTACT ME</Link><br />
    </p>
  </Layout>
)

export default IndexPage

