module.exports = {
  siteMetadata: {
    title: "INTEROP'19 | The Health Interoperability Symposium",
    author: "Wales Institute of Digital Information",
    description: "Interop’19 is bringing together leaders from business and the NHS to define what interoperability means to the NHS in 2019, making sense of HL7 FHIR, Snomed CT, OpenEHR and IHE.",
    keywords: "interoperability, interop, integration, health, informatics, IT, NHS, symposium, conference, OpenEHR, HL7, FHIR, Snomed CT, IHE"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // 'gatsby-plugin-offline',
  ],
}
