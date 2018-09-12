import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import cardiff_bay from '../assets/images/cardiff_bay.jpg'

const Where = (props) => (
    <Layout>
        <Helmet>
            <title>Interoperability Symposium 2019 - Location</title>
            <meta name="Interop 2019 Location" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Location</h1>
                    </header>
                    <span className="image main"><img src={cardiff_bay} alt="" /></span>
                    <p>The Interoperability Symposium 2019 with be held in Cardiff, Wales. </p>
                    <p>Cardiff, Wales’ capital city offers spectacular shopping, museums, dining and entertainment. Easy to explore on foot you can visit the free  National Museum Cardiff and spectacular Cardiff Castle all within the city centre.</p> 
                    <p>Visit the official regional website for more information at <a href="http://www.visitcardiff.com">Visit Cardiff</a></p>
                    <h2>Road</h2>
    <p>Cardiff is easily accessible via the M4 motorway, which runs through the north of the city, making London a comfortable drive away. From the Midlands, the North of England and Scotland it is a straightforward drive via the M6, M5 and M50/M4. From the South and South West of England the approach is by M5 and M4. Access from West Wales is by M4.</p>
    <h2>Rail</h2>                
    <p>Cardiff has direct rail links to many cities in the UK including London, Birmingham, Manchester, Nottingham, Bristol and Southampton. The journey time from London Paddington to Cardiff is just over 2 hours and leaves every 30 minutes.</p>
                    <h2>Air</h2>
                    <p>Cardiff Airport is 12 miles west of the city centre and 10 miles from Junction 33 of the M4. The airport has direct flights to over 50 destinations and connecting flights to over 800 destinations worldwide. Visit the Cardiff Wales airport website for details. Airlines operating from Cardiff include KLM, Aer Lingus, Flybe, Vueling and Ryanair.</p>
    </div>
            </section>
        </div>

    </Layout>
)

export default Where
