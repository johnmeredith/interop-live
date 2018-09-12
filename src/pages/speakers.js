import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'
import speaker from '../assets/images/oleg-laptev-546607-unsplash.jpg'

const Speakers = (props) => (
    <Layout>
        <Helmet>
            <title>Interop 2019 - Meet Our Speakers</title>
            <meta name="Meet the Speakers at Interop 2019" content="The people speakign at the 2019 Interoperability Symposium." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Meet Our Speakers</h1>
                    </header>
                    <span className="image main"><img src={speaker} alt="" /></span>
                    <p>We have a great array of speakers lined up and will let you know about them soon.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Speakers