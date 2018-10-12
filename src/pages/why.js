import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import question_trees from '../assets/images/evan-dennis-75563-unsplash-576.jpg'
import meta_butterfly from '../assets/images/suzanne-d-williams-794133-unsplash-576.jpg'
import paper from '../assets/images/christa-dodoo-485704-unsplash-576.jpg'
import interop_venn from '../assets/images/interop_venn-576.png'

const Why = (props) => (
    <Layout>
        <Helmet>
            <title>Why Do We Need To Define Health Interoperabililty? | Interop'19</title>
            <meta name="description" content="Why do we need to deinfe inteoperability in health?" />
        </Helmet>

         <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Where are we now?</h2>
                    </header>
                    <p>Health based computerised systems and networks are used to support patient care. 
                        Within which, the electronic health record (EHR) is an emerging entity encompassing the context of that patient care. 
                        Despite the ubiquity of computers in daily life and the use of digital systems as part of clinical care for decades, the ability to draw a longitudinal narrative through the myriad of different electronic systems and components across primary, secondary and tertiary care has proven elusive. 
                        And now there is growing pressure on health providors and technology companies to interoperate systems and data. </p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <img src={meta_butterfly} alt="Photo by Suzanne D. Williams on Unsplash" />
                <div className="content">
                    <div className="inner">
                            <header className="major">
                                <h3>The Health Record Is Evolving</h3>
                            </header>
                            <p>New requirements for the storage and reuse of clinical data are constantly emerging. The reuse of clinical data for both front line care and secondary uses such as quality reporting is now seen as a necessity. The traditional document bound paradigm is now shifting to a more data centric model supported by Application Protocol Interfaces (APIs) to leverage interactions between electronic systems. Additionally, the need for better integration across the spectrum of health informatics is evidenced by international government initiatives. </p>
                    </div>
                </div>
            </section>
            <section>
                <img src={paper} alt="Photo by Christa Dodoo on Unsplash" />
                <div className="content">
                        <div className="inner">
                            <header className="major">
                            <h3>Paper is still here</h3>
                            </header>
                            <p>Individual pockets of paperless or paper-light working exist in healthcare institutions, with research suggesting significant benefits to clinical efficiency.  Evidence also suggests that clinical users resort to reverting to paper-based records without effective interoperability. It is evident that intelligently utilising clinical data is paramount to supporting clinicians in their daily work, and this requires effective integration between healthcare systems and processes.</p>

                        </div>
                </div>
            </section>
            <section>
                <img src={question_trees} alt="Forest trees marked with question marks" />
                <div className="content">
                    <div className="inner">
                            <header className="major"><h3>How do we define interoperability?</h3></header>
                            <p>
                            Interoperability is <a href="https://www.mendeley.com/research-papers/ieee-standard-computer-dictionary-compilation-ieee-standard-computer-glossaries/?utm_source=desktop&utm_medium=1.19.2&utm_campaign=open_catalog&userDocumentId=%7B3a67ba06-569e-3bd1-bea8-7d9016ef0664%7D">defined by IEEE</a> as  the “ability of two or more systems or components to exchange information and to use the information that has been exchanged”. Several examples of this definition being extended also exist within published literature. However, the term has been cited [http://www.audit.wales/publication/informatics-systems-nhs-wales] as being ambiguous when applied to national informatics strategies.
                            </p>
                            <p>
                            <a href="https://www.springer.com/gb/book/9783319303680">Benson and Grieve</a> provide an extended definition comprising the following;    
                            </p>
                    </div>
                </div>    
            </section>
            <section>
                    <img src={interop_venn} alt="Venn diagram of interoperability types" />
                    <div className="content">
                        <div className="inner">
                                                        <ul className="alt">
                            <li><strong>Technical interoperability</strong> moves data from one system to another system. Technical interoperability is only concerned about message itself, and not the contents. It is the most solid aspect of interoperability supported for decades by the HL7 organisation who define messaging standards such as HL7 v2 and more recently HL7 FHIR.</li>
                            <li><strong>Semantic interoperability</strong> is achieved when the meaning of data is exchanged and is unambiguously defined. It supports the concept of clinical provenance as it is specific to individual clinical domains and the context in which it has been recorded. This is additionally supported through clinical terminologies, codes and identifiers (such as Snomed CT which is the principle clinical terminology system in use by the NHS) and is the principle use case for a technology called OpenEHR.</li>
                            <li><strong>Process (or clinical) interoperability</strong> is achieved when clinical users are able to share understanding across disparate workflows and business processes. The care context is thus understood as well as the data.</li>
                            </ul>
                        </div>
                    </div>
            </section>
            </section>
            <section id="three">
                <div className="inner">
                <p>What is clear is that the definition represents the extent to which interoperability is a requirement for health providers, with different standards and technological functions able to provide support for specific use cases to substantiate provenance with the patient record. </p>
                <p>However, there is ambiguity surrounding how these technologies support interoperability. This is compounded by socio-political  enthusiasm for concepts such as artificial intelligence coming to the fore. </p>
                <p>The potential for automated, algorithmic platforms in the form of online clinical consultation applications and patient held records merits careful consideration in the form of clinical and information governance policy for health providers. While several technological solutions exist to support greater interoperability, at Interop’19 we will discuss the underlying requirements that need to be addressed. </p>
                <p><strong>There is no silver bullet and interoperability is difficult to resolve... let's talk about that.</strong></p>
                </div>
                <div className="inner">
                                <header className="major">
                                    <h2>Register for Interop'19</h2>
                                </header>
                                <div className="box alt">
                                <p>Interop'19 is <bold>FREE TO ATTEND.</bold></p>
                            </div>
                                <a href="/register" className="button special">Register Now</a>
                               
                </div>

            </section>
        </div>

    </Layout>
)

export default Why
