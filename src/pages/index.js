import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import cardiff_bay from '../assets/images/cardiff_bay.jpg'
import theatre_chairs from '../assets/images/theatre_chairs.jpg'
import question_trees from '../assets/images/evan-dennis-75563-unsplash.jpg'
import speaker from '../assets/images/oleg-laptev-546607-unsplash.jpg'
import logo_uwtsd from '../assets/images/uwtsd-logo.png'
import logo_nwis from '../assets/images/nwis-logo.png'
import logo_apperta from '../assets/images/apperta_logo.png'
import logo_bevan from '../assets/images/bevan_logo.png'
import logo_dhew from '../assets/images/dhew_logo.png'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="INTEROP'19 | The Health Interoperability Symposium"
                    meta={[
                        { name: 'description', content: 'INTEROP’19 is bringing together leaders from business and the NHS to define what interoperability means to the NHS in 2019, making sense of HL7 FHIR, Snomed CT, OpenEHR and IHE.' },
                        { name: 'keywords', content: 'interoperability, interop, integration, health, informatics, IT, NHS, symposium, conference, OpenEHR, HL7, FHIR, Snomed CT, IHE' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${question_trees})`}}>
                            <header className="major">
                                <h3>Why</h3>
                                <p>The conversation about interoperability by the people that know it best.</p>
                            </header>
                            <Link to="/why" className="link primary"></Link>
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
                            <Link to="/speakers" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${cardiff_bay})`}}>
                            <header className="major">
                                <h3>Where</h3>
                                <p>Interop 2019 will be held at Cardiff City Stadium, Wales on March 14, 2019. Click for more details.</p>
                            </header>
                            <Link to="/where" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Presented by Wales Institute for Digital Information</h2>
                            </header>
                            <div className="box alt">
                                    <div className="grid-wrapper">
                                        <div className="col-3"><span className="image fit"><img src={logo_nwis} alt="NHS Wales Informatics Service" /></span></div>
                                        <div className="col-3"><span className="image fit"><img src={logo_uwtsd} alt="University of Wales Trinity St Davids" /></span></div>
                                     </div>
                                </div>
                            <header className="major">
                                <h2>In Association With</h2>
                            </header>
                            <div className="box alt">
                                    <div className="grid-wrapper">
                                        <div className="col-2"><span className="image fit"><img src={logo_dhew} alt="Digital Health Ecosystem Wales" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src={logo_bevan} alt="Bevan Commission" /></span></div>
                                        <div className="col-2"><span className="image fit"><img src={logo_apperta} alt="Apperta Foundation" /></span></div>
                                    </div>
                                </div>
                        </div>
                    </section>
                    <section id="three">
                    <div className="inner">
                            <header className="major">
                                <h2>Register for Interop'19</h2>
                            </header>
                            <div className="box alt">
                            <p>Interop'19 is <bold>FREE TO ATTEND.</bold></p>
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
