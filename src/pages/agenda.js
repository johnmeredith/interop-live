import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import theatre_chairs_wide from '../assets/images/theatre_chairs_wide.jpg'

const Agenda = (props) => (
    <Layout>
        <Helmet>
            <title>Agenda | Interop'19</title>
            <meta name="description" content="The Full Programme for Health Interop 2019." />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Symposium Programme</h1>
                    </header>
                    <span className="image fit"><img src={theatre_chairs_wide} alt="Chairs in a conference hall" /></span>
                    <div className="box">
                        <p>The programme of speakers promises to be informative, enlightening and thought provoking. The aim of the Interoperability Symposium is to provide a forum to discuss what interoperability means in 2019 for the NHS. </p>
                        <p>The speakers all have a story to tell and experience to share from across the UK and Europe.</p>
                    </div>
                    <h1>Symposium Agenda</h1>
                                <div className="table-wrapper">
                                    <table className="alt">
                                        <thead>
                                            <tr>
                                                <th>Time</th>
                                                <th>Agenda Item / Talk</th>
                                                <th>Presenter</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>09:00</td>
                                                <td>Coffee</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>09:20</td>
                                                <td>Welcome and Opening Remarks</td>
                                                <td>Andrew Griffiths, NHS Wales Informatics Service</td>
                                            </tr>
                                            <tr>
                                                <td>09:45</td>
                                                <td><strong>Session 1</strong></td>
                                                <td>Sion Charles, Bevan Commission</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Clinical Interoperability</td>
                                                <td>Professor John Williams, Swansea University</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Getting the Basics Right</td>
                                                <td>Tim Benson, R-Outcomes Ltd</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>HiGHmed - An Open Platform Approach</td>
                                                <td>Birger Haarbrandt, HiGHmed Project</td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="2"></td>
                                                <td>100.00</td>
                                            </tr>
                                        </tfoot>
                                    </table>
</div>




                </div>
            </section>
        </div>

    </Layout>
)

export default Agenda
