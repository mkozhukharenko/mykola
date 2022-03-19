import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Mykola Kozhuharenko contacts" />
    <h1>Contacts</h1>
    <p>
      email: <a href="mailto: mykola.kozhuharenko@gmail.com"> mykola.kozhuharenko@gmail.com</a>   <br />
      telegram: <a href="https://t.me/kozhuharenko_secondary">@kozhuharenko_secondary</a> <br />
    </p>
  </Layout>
)

export default SecondPage
