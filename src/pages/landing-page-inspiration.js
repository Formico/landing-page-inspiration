import React from 'react'
import Link from 'gatsby-link'

import Header from '../components/LandingPageInspiration/Header';
import LandingPages from '../components/LandingPageInspiration/LandingPages';
import Footer from '../components/Index/Footer';

const LandingPageInspiration = () => (
  <div style={{ height: "100vh", background: "white" }}>
    <Header />
    <h1>Landing Pages</h1>
    <Link to="/">Go back to the homepage</Link>
    <Footer />
  </div>
)

export default LandingPageInspiration
