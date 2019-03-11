import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import mcnicoll from '../assets/images/IanPic-casual-grey.jpg'
import bakke from '../assets/images/bakke.jpg'
import williams from '../assets/images/williams.jpg'
import benson from '../assets/images/benson.jpg'
import birger from '../assets/images/birger.jpg'
import douglas from '../assets/images/demelza_douglas.png'
import reilly from '../assets/images/davidreilly.jpg'
import hussin from '../assets/images/Zoe_Hussin.jpg'

import speaker from '../assets/images/oleg-laptev-546607-unsplash.jpg'

const Speakers = (props) => (
    <Layout>
        <Helmet>
            <title>Health Interoperability Symposium 2019 - Meet Our Speakers</title>
            <meta name="description" content="The people speaking at the 2019 Interoperability Symposium." />
        </Helmet>
        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Meet Our Speakers</h1>
                    </header>
                        <div className="grid-wrapper">
                            <div className="col-6">
                            <h4>Silje Ljosland Bakke</h4>
                                <p><span className="image left"><img src={bakke} alt="Silje Ljosland Bakke" /></span>Silje is an informatician and a registered nurse, with a clinical background in perioperative care as well as clinical research from the University Hospital of Northern Norway. She has worked in health IT since 2009, and since 2015 as an information architect in the Nasjonal IKT health trust for strategic IT cooperation within the Norwegian hospital system. She has been a leading figure in Norway’s national archetype governance, and is a member of the openEHR Foundation management board and co-lead of the openEHR clinical modelling program. </p>
                            <h4>Birger Haarbrandt</h4>            
                                <p><span className="image left"><img src={birger} alt="Birger Haarbrandt" /></span>Birger Haarbrandt holds a B.A. in Medical Information Management and an M.Sc. in Computer Science. Between 2013 and 2017, Birger has established the Hannover Medical School Translational Research Framework (HaMSTR), investigating the enhancement of traditional data warehousing approaches (including i2b2/tranSMART) with openEHR. He previously worked on the establishment of a regional health network in the state of Lower-Saxony based on IHE XDS and as a software developer for CGM MEDISTAR.</p>
                                <p>Since 2015, he has substantially contributed to the concept of the HiGHmed consortium to apply for the Medical Informatics Initiative, a national research project to enable secondary use of health data across institutions. Since the start of the project in January 2018, he is working in HiGHmed as a software architect for the Peter L. Reichertz Institute for Medical Informatics, aiming at the establishment of an open platform based on IHE, openEHR and FHIR between eight German university hospitals.</p>
                            <h4>Professor JG Williams, CBE FRCP</h4>            
                                <p><span className="image left"><img src={williams} alt="Professor JG Williams, CBE FRCP" /></span>Professor Williams is currently Professor of Health Services Research and Consultant Gastroenterologist at Swansea University’s College of Medicine. His main research interests are gastroenterology, health services, health informatics, service delivery, and patient outcome. He chiefly focuses on better diagnosis, treatments and services - particularly in gastroenterology - and on increasing patient involvement in these processes.  Professor Williams has a long-standing interest in improving information systems that support patient care and directs the Royal College of Physicians’ Health Informatics Unit. </p>
                                <p>He has evaluated usage of routinely collected data to support research, audit and professional appraisal, highlighting the need - from a clinical perspective - for standardising the structure and content of patients’ records. At the Royal College of Physicians, he has led the development of evidence- and consensus-based standards for hospital admission records and communications. Professor Williams is presently Strategic Lead for the Supporting Professionals Workstream with the NHS Wales Informatics Service. </p>
                            <h4>Demelza Douglas</h4>            
                                <p><span className="image left"><img src={douglas} alt="Demelza Douglas" /></span>
                            Demelza graduated for the University of Southampton with a degree in occupational therapy in 2002 and has specialised in the field of community paediatrics for the last 13 years.  Since 2017 she has been the CCIO for Somerset Partnership NHS Foundation Trust and has been significantly involved in the procurement and development of the Somerset Integrated Digital Electronic Record (SIDeR).
                            </p>  
                            
                            </div>
                            <div className="col-6">
                            <h4>Dr Tim Benson</h4>
                                <p><span className="image right"><img src={benson} alt="Dr Tim Benson" /></span>Tim Benson graduated from the University of Nottingham as a mechanical engineer. He was introduced to healthcare computing at the Charing Cross Hospital, London, where he evaluated the socio-economic benefits of medical computing systems. He founded one of the first GP computer suppliers (Abies Informatics Ltd). There, with James Read and David Markwell, he helped develop the Read Codes, which became the national standard for NHS primary care and one of the two sources of SNOMED CT.  </p>
                                <p>Tim led the first European project team on open standards for health interoperability, which led to CEN/TC251 and collaboration with HL7, where he was a co-chair of the Education Committee for several years.  He has also developed a family of short generic patient-reported outcome measures with <a href="http://www.r-outcomes.com" target="_blank">R-Outcomes Ltd</a>.</p>
                            <h4>Dr Ian McNicoll</h4>
                                <p><span className="image right"><img src={mcnicoll} alt="Dr Ian McNicoll" /></span>Ian is a former Scottish family doctor, and has been involved in healthcare informatics for nearly 30 years, working with openEHR technologies for the last 12 years, most recently with his consultancy, freshEHR Clinical Informatics and as Co-Chair of the openEHR Foundation. His current focus is as CCIO of inidus, a UK startup delivering cloud-hosted clinical computing services, based on open standards. He is also an INTEROPen Board member, is actively involved in UK FHIR profile curation, an Honorary Senior Research Associate at CHIME, UCL, an NHS Digital Innovation Associate and a Founding Fellow of the UK Faculty of Clinical Informatics</p>
                            </div>
                            <h4>David Reilly</h4>
                                <p><span className="image right"><img src={reilly} alt="David Reilly" /></span>
                                Head of Interoperability at Alder Hey and the Cheshire and Merseyside Technical lead for the Share2Care Programme. David has worked at Alder Hey Children’s Hospital for two years, before this was a Senior technical Developer at St Helens and Knowlsey and previously worked for iMerseyside. He graduated with a BSc in Computer Information Systems from the University of Liverpool and is currently working to complete a MSc in Health Informatics.
                                </p>
                            <h4>Zoe Hussin</h4>
                                <p><span className="image right"><img src={hussin} alt="Zoe Hussin" /></span>
                                Zoe is a Clinical Interoperability Lead at Alder Hey. She has worked in a clinical lead digital role for the last 2 years and prior to this at Liverpool Community Health.  Having 20 years clinical experience within the NHS as Paediatric Nurse and a Community Practitioner in Public Health, Zoe continues to clinically practice in A&E at Alder Hey. She is part of the  2nd cohort on the NHS Digital Leadership Academy for 2019/2020.
                                </p>


                        </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default Speakers