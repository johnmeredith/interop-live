import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'
import cardiff_bay from '../assets/images/cardiff_bay.jpg'
import theatre_chairs from '../assets/images/theatre_chairs.jpg'
import screen_code from '../assets/images/screen_code.jpg'
import neon_lights from '../assets/images/neon_lights.jpg'
import speaker from '../assets/images/oleg-laptev-546607-unsplash.jpg'
import logo_uwtsd from '../assets/images/uwtsd.gif'
import logo_nhs_wales from '../assets/images/NHS_Wales_70_Logo.jpg'


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Health Interoperability Symposium 2019"
                    meta={[
                        { name: 'description', content: 'The first UK symposium dedicated to health interoperability' },
                        { name: 'keywords', content: 'interoperability, interop, integration, health, informatics, IT, symposium, conference, OpenEHR, HL7, FHIR, Snomed' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${neon_lights})`}}>
                            <header className="major">
                                <h3>Why</h3>
                                <p>The conversation about interoperability by the people that know it best.</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${theatre_chairs})`}}>
                            <header className="major">
                                <h3>Agenda</h3>
                                <p>The Full Programme</p>
                            </header>
                            <Link to="/agenda" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${speaker})`}}>
                            <header className="major">
                                <h3>Speakers</h3>
                                <p>Meet our speakers!</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${cardiff_bay})`}}>
                            <header className="major">
                                <h3>Where</h3>
                                <p>Interop 2019 will be held in Cardiff, Wales on March 14, 2019. Click for more details.</p>
                            </header>
                            <Link to="/where" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>In Association With</h2>
                            </header>
                            <div className="box alt">
                                    <div className="grid-wrapper">
                                        <div className="col-4"><span className="image fit"><img src={logo_nhs_wales} alt="NHS Wales" /></span></div>
                                        <div className="col-4"><span className="image fit"><img src={logo_uwtsd} alt="University of Wales Trinity St Davids" /></span></div>
                                    </div>
                                </div>
                            <ul className="actions">
                                <li><Link to="/register" className="button next">Register Now</Link></li>
                            </ul>
                        </div>
                    </section>
                    <section id="three">
                        <div className="inner">
                            <header className="major">
                                <h2>This is another section.</h2>
                            </header>
                            <div className="box alt">
                            <p>Some text</p>
                         </div>
                            <ul className="actions">
                                <li><Link to="/register" className="button next">Register Now</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex