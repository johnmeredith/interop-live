import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import ccfc from '../assets/images/ccfc.jpg'
import apperta from '../assets/images/apperta_logo.png'
import bevan from '../assets/images/bevan_logo.png'
import dhew from '../assets/images/dhew_logo.png'

const News = (props) => (
    <Layout>
        <Helmet>
            <title>Health Interoperability Symposium 2019 - News</title>
            <meta name="description" content="News from the Health Interoperability Symposium 2019" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h3>28/01/19 - Interop'19 Gets An Upgrade</h3>
                    </header>
                    <p><span className="image right"><img src={dhew} alt="Digital Health Ecosystem Wales" /></span>
                        
                    <strong>Interop'19 is on the move to Cardiff City Stadium.</strong></p>
                    <p>Due to the great demand for attendance, we are pleased to announce that the Interoperability Symposium is moving to Cardiff City Stadium. We are hoping to bring you a bigger event, with more collaboration thanks to our friends at the Digital Health Ecosystem Wales.</p>
                    <p><span className="image right"><img src={ccfc} alt="Cardiff City Stadium" /></span>Digital Health Ecosystem Wales is a network connecting developers and companies with innovative digital health solutions with the NHS in Wales. It represents a collaboration between the Life Sciences Hub Wales and the NHS Wales Informatics Service (NWIS) and is funded through the Welsh Government’s Efficiency Through Technology Programme.</p>
                    <p>There is no change to the date of the event and the larger <a href="../register">ticket allocation is available now.</a></p>
                </div>
            </section>
            <section id="two">
                <div className="inner">
                <header className="major">
                                        <h3>23/01/19 - Collaboration Update</h3>
                    </header>
                            <p><span className="image right"><img src={bevan} alt="The Bevan Commission" /></span>
                            <strong>We are very pleased to announce that Interop'19 is collaborating with the Bevan Commission and Apperta Foundation.</strong>
                            </p>
                            <p>
                                <a href="http://www.bevancommission.org/en/">The Bevan Commission</a> is a group of international experts providing advice to the Minister for Health and Social Services and ensuring that Wales can draw on best healthcare practices from around the world while remaining true to the principles of the NHS as established by Aneurin Bevan.
                            </p>
                            <p><span className="image right"><img src={apperta} alt="Apperta Foundation" /></span>
                                Additionally, the <a href="https://apperta.org/">Apperta Foundation</a> are bringing the message of open platforms to the symposium. The Apperta Foundation is a clinician-led, not-for-profit company. Supported by NHS England, NHS Digital and others, the foundation promotes open systems and standards for digital health and social care.
                            </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default News
