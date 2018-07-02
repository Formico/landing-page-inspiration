import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/Header'
import './reset.css'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={ data.site.siteMetadata.title }
      meta={[
        { name: 'description', content: 'Formico - Software Development Agency' },
        { name: 'keywords', content: 'software, design, development, product, product management, websites, react, react native, node' },
        { property: 'og:title', content: 'Formico' },
        { name: 'og:descripttion', content: 'software, design, development, product, product management, websites, react, react native, node' },
        { property: 'og:url', content: 'https://formico.io' },
      ]}
    />
    <Header siteTitle={ data.site.siteMetadata.title } />
    <div>
      { children() }
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
