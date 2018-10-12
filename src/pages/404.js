import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
        <Helmet>
            <title>Page Not Found | INTEROP'19</title>
            <meta name="description" content="Generic Page" />
        </Helmet>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>ERROR 404 INTEROPERABILITY FAILURE</h1>
                <p>All forms of technical, semantic and process interop failed... the sadness.</p>
            </div>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
