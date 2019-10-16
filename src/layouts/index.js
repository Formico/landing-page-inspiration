import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './reset.css'
import './index.scss'

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <title>Formico</title>

      { /* SEO attributes */ }
      <meta name="description" content="Formico is a software development agency that helps companies build advanced custom software solutions. We specialize in full stack web development, cloud infrastructure, and machine learning technology development." />
      <meta name="keywords" content="software, design, development, product, product management, websites, react, react native, node" />

      { /* Open Graph */ }
      <meta property="og:title" content="Formico | Software Development Agency" />
      <meta name="og:description" content="Formico is a software development agency that helps companies build advanced custom software solutions. We specialize in full stack web development, cloud infrastructure, and machine learning technology development." />
      <meta property="og:url" content="https://formico.github.io/landing-page-inspiration/" />
      <meta property="og:image" content="/img/formicoOpenGraph.png" />

      { /* favicon attributes */ }
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#242444" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />

      { /* Google Verification */ }
      <meta name="google-site-verification" content="5UxDOlpohJhsr73rfK0UYxd_yUQUiEf-TcnmZ8jPVCQ" />

    </Helmet>
    <div>
      { children }
    </div>

    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet" />
  </div>
)

Layout.propTypes = {
  children: PropTypes.object,
}

export default Layout

