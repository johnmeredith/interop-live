import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import theatre_chairs_wide from '../assets/images/theatre_chairs_wide.jpg'

const Agenda = (props) => (
    <Layout>
        <Helmet>
            <title>Agenda | Interop'19</title>
            <meta name="description" content="The Full Programme for Health Interop 2019." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Symposium Programme</h1>
                    </header>
                    <span className="image fit"><img src={theatre_chairs_wide} alt="Chairs in a conference hall" /></span>
                    <div className="box">
                        <p>The programme of speakers promises to be informative, enlightening and thought provoking. The aim of the Interoperability Symposium is to provide a forum to discuss what interoperability means in 2019 for the NHS. </p>
                        <p>The speakers all have a story to tell and experience to share from across the UK and Europe.</p>
                    </div>
                    <h3>We will be publishing the full symposium agenda shortly.</h3>
                </div>
            </section>
        </div>

    </Layout>
)

export default Agenda