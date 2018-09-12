import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import theatre_chairs from '../assets/images/theatre_chairs.jpg'


const Register = (props) => (
    <Layout>
        <Helmet>
            <title>Generic - Forty by HTML5 UP</title>
            <meta name="Register for Interop 2019" content="Details of how to register for the 2019 Interoperability Symposium" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Register To Attend</h1>
                    </header>
                    <span className="image main"><img src={theatre_chairs} alt="" /></span>
                    <p>We will be launching our registration page very soon.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Register