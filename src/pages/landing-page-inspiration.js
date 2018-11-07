import React from 'react'

import Layout from '../layouts';

import Copy from '../components/LandingPageInspiration/Copy';
import Filters from '../components/LandingPageInspiration/Filters';
import LandingPages from '../components/LandingPageInspiration/LandingPages';
import CandyDispenser from '../components/LandingPageInspiration/CandyDispenser';
import Footer from '../components/Index/Footer';

class LandingPageInspiration extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedScreenSize: 'desktop',
      selectedCategories: new Set(),
    }

    this.onScreenSizeChange = this.onScreenSizeChange.bind(this);
    this.toggleCategory     = this.toggleCategory.bind(this);
  }

  onScreenSizeChange(newSize) {
    this.setState({
      selectedScreenSize: newSize
    });
  }

  toggleCategory(category) {
    this.setState(({ selectedCategories: c }) => ({
      categories: c.has(category) ? c.delete(category) : c.add(category)
    }));
  }

  render() {
    const {
      selectedScreenSize,
      selectedCategories,
    } = this.state;

    return (
      <Layout>
        <div style={{ overflow: 'hidden', position: 'relative', background: '#141433' }}>
          <Filters
            selectedCategories={ selectedCategories }
            selectedScreenSize={ selectedScreenSize }
            toggleCategory={ this.toggleCategory }
            onScreenSizeChange={ this.onScreenSizeChange } />
          <Copy />
          <LandingPages
            selectedCategories={ selectedCategories }
            selectedScreenSize={ selectedScreenSize } />
          <CandyDispenser />
          <Footer />
        </div>
      </Layout>
    )
  }
}

export default LandingPageInspiration
