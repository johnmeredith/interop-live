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
                    <h1>Agenda</h1>
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
                                                <td>Introduced by Sion Charles, Bevan Commission</td>
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

                                            <tr>
                                                <td></td>
                                                <td>BREAK</td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td>11:45</td>
                                                <td><strong>Session 2</strong></td>
                                                <td>Introduced by Helen Northmore, Digital Health Ecosystem Wales</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>SIDeR: Linking Health and Social Care in Somerset</td>
                                                <td>Demelza Douglas, Chief Clinical Information Officer (Somerset Partnership NHS Foundation Trust)</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Pragmatic Standardisation of Clinical Models</td>
                                                <td>Silje Bakke, Clinical Informaticist (Nasjonal IKT)</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Share2Care: Effective Information Sharing</td>
                                                <td>David Reilly, Head of Interoperability (Alderhey Hospital)</td>
                                            </tr>

                                            <tr>
                                                <td>13:15</td>
                                                <td>LUNCH</td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td>14:00</td>
                                                <td><strong>Afternoon Session</strong></td>
                                                <td>Introduced by Ian Wells, University of Wales Trinity St Davids</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td><strong>Keynote: </strong>"Manyura Manyah - Interoperability is *so* 20th Century"</td>
                                                <td>Dr Ian McNicoll, OpenEHR Foundation</td>
                                            </tr>

                                            <tr>
                                                <td>14:35</td>
                                                <td><strong>Session 3</strong></td>
                                                <td>Introduced by Peter Coates, Apperta Foundation</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>How Clinical Workflow Works</td>
                                                <td>Thomas Beale, Consutlant (Ars Semantica)</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Of Platforms, Towers and Books</td>
                                                <td>Colin Brown, Clinical Informatics Adviser (NSS SCIMP)</td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>How open digital platforms support patient centric care</td>
                                                <td>Mike Jones, Vice President, Analyst (Gartner)</td>
                                            </tr>

                                            <tr>
                                                <td></td>
                                                <td>BREAK</td>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td>16:00</td>
                                                <td><strong>Session: TBC</strong></td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>Closing Remarks</td>
                                                <td>John Meredith, NHS Wales Informatics Service</td>
                                            </tr>

                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan="2"></td>
                                                <td>17:00 CLOSE</td>
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
