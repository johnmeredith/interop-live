import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import theatre_chairs from '../assets/images/theatre_chairs.jpg'


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
                    <div style="width:100%; text-align:left;"><iframe src="https://eventbrite.co.uk/tickets-external?eid=51001806777&ref=etckt" frameborder="0" height="275" width="100%" vspace="0" hspace="0" marginheight="5" marginwidth="5" scrolling="auto" allowtransparency="true"></iframe><div style="font-family:Helvetica, Arial; font-size:12px; padding:10px 0 5px; margin:2px; width:100%; text-align:left;" ><a class="powered-by-eb" style="color: #ADB0B6; text-decoration: none;" target="_blank" href="https://www.eventbrite.co.uk/">Powered by Eventbrite</a></div></div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Register