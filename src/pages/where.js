import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import cardiff_bay from '../assets/images/cardiff_bay_wide.jpg'
import icon_train from '../assets/images/icon_train.png'
import icon_car from '../assets/images/icon_car.png'
import icon_plane from '../assets/images/icon_plane.png'
import ccfc from '../assets/images/ccfc.jpg'

const Location = (props) => (
    <Layout>
        <Helmet>
            <title>Health Interoperability Symposium 2019 - Location</title>
            <meta name="description" content="Join Us at Health Interoperability Symposium 2019" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                    <h1>Come to Interop 2019</h1>
                    </header>
                    <span className="image main"><img src={cardiff_bay} alt="" /></span>
                    <p><span className="image right"><img src={ccfc} alt="" /></span>The Interoperability Symposium 2019 with be held in at the Cardiff City Stadium, Wales.<br />
                    Cardiff, Wales’ capital city offers spectacular shopping, museums, dining and entertainment. Easy to explore on foot you can visit the free  National Museum Cardiff and spectacular Cardiff Castle all within the city centre.<br /> 
                    Visit the official regional website for more information at <a href="http://www.visitcardiff.com">Visit Cardiff</a>.<br />
                    <h2>How to get here</h2>
                    <h3>Road</h3>
                    <p><span className="image left"><img src={icon_car} alt="Travel by car" /></span>Cardiff is easily accessible via the M4 motorway, which runs through the north of the city, making London a comfortable drive away. From the Midlands, the North of England and Scotland it is a straightforward drive via the M6, M5 and M50/M4. From the South and South West of England the approach is by M5 and M4. Access from West Wales is by M4.</p>
                    <h3>Rail</h3>                
                    <p><span className="image left"><img src={icon_train} alt="Travel by train" /></span>Cardiff has direct rail links to many cities in the UK including London, Birmingham, Manchester, Nottingham, Bristol and Southampton. The journey time from London Paddington to Cardiff is just over 2 hours and leaves every 30 minutes.</p>
                    <h3>Air</h3>
                    <p><span className="image left"><img src={icon_plane} alt="Travel by plane" /></span>Cardiff Airport is 12 miles west of the city centre and 10 miles from Junction 33 of the M4. The airport has direct flights to over 50 destinations and connecting flights to over 800 destinations worldwide. Visit the Cardiff Wales airport website for details. Airlines operating from Cardiff include KLM, Aer Lingus, Flybe, Vueling and Ryanair.</p>
                    <h3>Address</h3>
                    <p><span className="icon alt fa-home"></span>
                    <span>Cardiff City Stadium<br />
                    Cardiff<br />
                    CF11 8AZ<br />
                    Wales</span></p>
                    </div>
            </section>
        </div>

    </Layout>
)

export default Location
