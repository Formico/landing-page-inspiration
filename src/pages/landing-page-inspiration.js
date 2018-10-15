import React from 'react'
import Link from 'gatsby-link'

import Layout from '../layouts';

import Header from '../components/LandingPageInspiration/Header';
import LandingPages from '../components/LandingPageInspiration/LandingPages';
import Footer from '../components/Index/Footer';

const LandingPageInspiration = () => (
  <Layout>
    <div style={{ minHeight: "100vh", background: "white" }}>
      <Header />
      <h1>Landing Pages</h1>
      <Link to="/">Go back to the homepage</Link>
      <LandingPages />
      <Footer />
    </div>
  </Layout>
)

export default LandingPageInspiration
