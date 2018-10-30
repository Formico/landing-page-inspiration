import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky';

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
        <Header />
        <StickyContainer className="container">
          <Sticky>
            {({ style, isSticky, distanceFromTop }) => (
              <Filters
                style={ style }
                isSticky={ isSticky }
                distanceFromTop={ distanceFromTop }
                selectedScreenSize={ this.state.selectedScreenSize }
                onScreenSizeChange={ this.onScreenSizeChange } />
            )}
          </Sticky>
        <LandingPages
          selectedScreenSize={ this.state.selectedScreenSize } />
        <Footer />
        </StickyContainer>
      </Layout>
    )
  }
}

export default LandingPageInspiration