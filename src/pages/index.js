import React from 'react'
import Link from 'gatsby-link'

import Splash from '../components/Splash';
import Process from '../components/Process';
import Pricing from '../components/Pricing';

const IndexPage = ({ ctaUrl }) => (
  <div>
    <Splash ctaUrl={ ctaUrl }/>
    <Process />
    <Pricing />
  </div>
)

export default IndexPage
