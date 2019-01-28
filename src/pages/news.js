import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

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
                    <strong>Interop'19 is on the move to Cardiff City Stadium.</strong>
                    <p>Due to the great demand for attendance, we are pleased to announce that the Interoperabilty Symposium is moving to Cardiff City Stadium. We are hoping to bring you a bigger event, with more collaboration thanks to our friends at the Digital Health Ecosystem Wales.</p>
                    <p>Digital Health Ecosystem Wales is a network connecting developers and companies with innovative digital health solutions with the NHS in Wales. It represents a collaboration between the Life Sciences Hub Wales and the NHS Wales Informatics Service (NWIS) and is funded through the Welsh Government’s Efficiency Through Technology Programme.</p>
                    <p>There is no change to the date of the event and the larger <a href="../register">ticket allocation is availble now.</a></p>
                </div>
            </section>
            <section id="two">
                <div className="inner">
                    <header className="major">
                        <h3>28/01/19 - Interop'19 Gets An Upgrade</h3>
                    </header>
                    <strong>Interop'19 is on the move to Cardiff City Stadium.</strong>
                    <p>Due to the great demand for attendance, we are pleased to announce that the Interoperabilty Symposium is moving to Cardiff City Stadium. We are hoping to bring you a bigger event, with more collaboration thanks to our friends at the Digital Health Ecosystem Wales.</p>
                    <p>Digital Health Ecosystem Wales is a network connecting developers and companies with innovative digital health solutions with the NHS in Wales. It represents a collaboration between the Life Sciences Hub Wales and the NHS Wales Informatics Service (NWIS) and is funded through the Welsh Government’s Efficiency Through Technology Programme.</p>
                    <p>There is no change to the date of the event and the larger <a href="../register">ticket allocation is availble now.</a></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default News
