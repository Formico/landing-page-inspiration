import React from 'react'
import Img from "gatsby-image"

import Layout from '../layouts';

import Header from '../components/LandingPageInspiration/Header';
import Footer from '../components/Index/Footer';

const LandingPage = ({ pageContext }) => {
  console.log(pageContext);

  const mobileImage = pageContext.images.mobile,
        tabletImage = pageContext.images.tablet,
        desktopImage = pageContext.images.desktop;

  return (
    <Layout>
      <div className="lpi-landing-page">
        <Header />
        <div>{ pageContext.title }</div>
        <div>{ pageContext.url }</div>
        <div>{ pageContext.categories }</div>
        <div className="images-container">
          <Img fluid={ mobileImage } />
          <Img fluid={ tabletImage } />
          <Img fluid={ desktopImage } />
        </div>
        <Footer />
      </div>
    </Layout>
  )
}

export default LandingPage;
