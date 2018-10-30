import React from 'react'

import Layout from '../layouts';

import Header from '../components/LandingPageInspiration/Header';
import Page from '../components/LandingPageInspiration/Page';
import Footer from '../components/Index/Footer';

const LandingPage = ({ pageContext }) => {
  return (
    <Layout>
      <div className="lpi-landing-page">
        <Header />
        <Page
          title={ pageContext.title }
          url={ pageContext.url }
          categories={ pageContext.categories }
          images={ pageContext.images } />
        <Footer />
      </div>
    </Layout>
  )
}

export default LandingPage;
