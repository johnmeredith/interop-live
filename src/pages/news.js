import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../assets/images/roman-kraft-260082-unsplash_1280.jpg'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'
import cardiff_bay from '../assets/images/cardiff_bay.jpg'

const News = (props) => (
    <Layout>
        <Helmet>
            <title>Health Interoperability Symposium 2019</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding />

        <div id="main">

            <section id="two" className="spotlights">
 
                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>28/01/19 - Interop'19 Gets An Upgrade</h3>
                            </header>
                            <strong>Interop'19 is on the move to Cardiff City Stadium.</strong>
                            <p>
                                Due to the great demand for attendance, we are pleased to announce that the Interoperabilty Symposium is moving to Cardiff City Stadium. We are hoping to bring you a bigger event, with more collaboration thanks to our friends at the Digital Health Ecosystem Wales.
                             </p>
                            <p>Digital Health Ecosystem Wales is a network connecting developers and companies with innovative digital health solutions with the NHS in Wales. It represents a collaboration between the Life Sciences Hub Wales and the NHS Wales Informatics Service (NWIS) and is funded through the Welsh Government’s Efficiency Through Technology Programme.
                            </p>
                            <p>There is no change to the date of the event and the larger <a href="../register">ticket allocation is availble now.</a></p>
                        </div>
                    </div>
                </section>


                <section>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>23/01/19 - Collabration Update</h3>
                            </header>
                            <strong>We are very pleased to announce that we are collaborating with @BevanCommission and Apperta Foundation on #Interop19!</strong>
                            <p>
                                <a href="http://www.bevancommission.org/en/">The Bevan Commission</a> is a group of international experts providing advice to the Minister for Health and Social Services and ensuring that Wales can draw on best healthcare practices from around the world while remaining true to the principles of the NHS as established by Aneurin Bevan.
                            </p>
                            <p>
                                Additinoally, the <a href="https://apperta.org/">Apperta Foundation</a> are bringing the message of open platofrms to the symposium. The Apperta Foundation is a clinician-led, not-for-profit company. Supported by NHS England, NHS Digital and others, the foundation promotes open systems and standards for digital health and social care.
                            </p>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default News
