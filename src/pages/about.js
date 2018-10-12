import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import whatsyourinterop from '../assets/images/rawpixel-753976-unsplash-interop-definition.jpg'
import writingpad from '../assets/images/kaleidico-754605-unsplash.jpg'

const Generic = (props) => (
    <Layout>
        <Helmet>
            <title>About Health Interoperability 2019</title>
            <meta name="description" content="About the Symposium" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About Us</h1>
                    </header>
                    <span className="image main"><img src={whatsyourinterop} alt="Image of a laptop with the question 'What is your definition of INTEROPERABILITY?'. "/></span>
                
                <p><span className="image right"><img src={writingpad} alt="Person writing on a note pad with a pen" /></span>The Symposium is an opportunity for people who have operated in the interoperability space to share and inform each other of their experiences. It is not about the technology, but the impact of that technology. The Symposium speakers will provide references to real world interoperability challenges and provide demonstrable examples in how to overcome the problems associated with harnessing the potential of the emerging electronic health record. </p>
                <p>What we are hoping to achieve is a consensus on the definition of interoperability and what it means for health providers in 2019. This in turn will facilitate the discussion across the UK to support the teams of clinicians and informatics staff manage expectations and make good evidenced based decisions going forward. </p>
                <p>Health Interoperability Symposium 2019 is supported by the Welsh Institute for Digital Information.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Generic