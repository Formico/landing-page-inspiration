import React from 'react'
import Link from 'gatsby-link'

import Layout from '../layouts';

import Header from '../components/LandingPageInspiration/Header';
import Filters from '../components/LandingPageInspiration/Filters';
import LandingPages from '../components/LandingPageInspiration/LandingPages';
import Footer from '../components/Index/Footer';

class LandingPageInspiration extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedScreenSize: 'desktop'
    }

    this.onScreenSizeChange = this.onScreenSizeChange.bind(this);
  }
  onScreenSizeChange(newSize) {
    this.setState({
      selectedScreenSize: newSize
    });
  }
  render() {
    return (
      <Layout>
        <div>
          <Header />
          <Filters
            selectedScreenSize={ this.state.selectedScreenSize }
            onScreenSizeChange={ this.onScreenSizeChange } />
          <LandingPages
            selectedScreenSize={ this.state.selectedScreenSize } />
          <Footer />
        </div>
      </Layout>
    )
  }
}

export default LandingPageInspiration
