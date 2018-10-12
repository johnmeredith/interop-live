import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import theatre_chairs from '../assets/images/theatre_chairs_wide.jpg'


const Register = (props) => (
    <Layout>
        <Helmet>
            <title>Register for the Health Interoperability Symposium 2019</title>
            <meta name="description" content="Register for Health Interoperability Symposium 2019" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Register To Attend</h1>
                    </header>
                    <span className="image main"><img src={theatre_chairs} alt="" /></span>
                    <p>Attendance at the 2019 Health Interoperability Symposium is FREE b ut places are limited.</p>
                    <h2>Target Audience</h2>
                    <p>The symposium is aimed at anyone who works in the field of health interoperability. The events aims to have a frank and honest discussion about the challenges the NHS faces and will be of interest to CIOs, CCIOs, CMIO’s, SME decision-makers, software architects, developers, leaders of change and innovators.</p>
                    <p>Click the following link to register:</p>
                    <a href="https://www.eventbrite.co.uk/e/health-interoperability-symposium-2019-registration-51001806777?ref=ebtnebregn" target="_blank"><img src="https://www.eventbrite.co.uk/custombutton?eid=51001806777" alt="Eventbrite - Health Interoperability Symposium 2019" /></a>
                
                </div>    
            </section>
        </div>

    </Layout>
)

export default Register