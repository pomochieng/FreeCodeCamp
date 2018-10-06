import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>My name is Peter, Welcome to my new Gatsby site.</p>
    <p>Am so greatful this worked out for me, I work at PodiiHQ .</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
