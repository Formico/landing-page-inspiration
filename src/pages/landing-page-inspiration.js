import React from 'react'
import { StickyContainer, Sticky } from 'react-sticky';

import Layout from '../layouts';

import Copy from '../components/LandingPageInspiration/Copy';
import Filters from '../components/LandingPageInspiration/Filters';
import LandingPages from '../components/LandingPageInspiration/LandingPages';
import Footer from '../components/Index/Footer';

class LandingPageInspiration extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedScreenSize: 'desktop',
      selectedCategories: new Set(),
      previewSize:        25,
    }

    this.onScreenSizeChange = this.onScreenSizeChange.bind(this);
    this.toggleCategory     = this.toggleCategory.bind(this);
    this.adjustPreviewSize  = this.adjustPreviewSize.bind(this);
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

  adjustPreviewSize(event) {
    this.setState({
      previewSize: event.target.value
    });
  }

  render() {
    const {
      selectedScreenSize,
      selectedCategories,
      previewSize
    } = this.state;

    return (
      <Layout>
        <div style={{ overflow: 'hidden', position: 'relative', background: '#141433' }}>
          <div style={{ height: 1, backgroundColor: '#141433', position: 'relative', zIndex: 1 }}></div>
          <StickyContainer style={{ position: 'relative' }} className="container">
            <Sticky>
              {({ style, isSticky, distanceFromTop }) => (
                <Filters
                  style={ style }
                  isSticky={ isSticky }
                  distanceFromTop={ distanceFromTop }
                  selectedCategories={ selectedCategories }
                  selectedScreenSize={ selectedScreenSize }
                  previewSize={ previewSize }
                  toggleCategory={ this.toggleCategory }
                  onScreenSizeChange={ this.onScreenSizeChange }
                  adjustPreviewSize={ this.adjustPreviewSize } />
              )}
            </Sticky>
            <Copy />
            <LandingPages
              selectedCategories={ selectedCategories }
              selectedScreenSize={ selectedScreenSize }
              previewSize={ previewSize } />
            <Footer />
          </StickyContainer>
        </div>
      </Layout>
    )
  }
}

export default LandingPageInspiration
