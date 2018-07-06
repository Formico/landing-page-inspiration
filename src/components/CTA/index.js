import React, { Component } from 'react'
import Link from 'gatsby-link'

import './index.scss'

export default class CTA extends Component {
  render() {
    const {
      link,
      text
    } = this.props;

    return (
      <Link className="button-cta" to={ link }>{ text }</Link>
    );
  }
}

