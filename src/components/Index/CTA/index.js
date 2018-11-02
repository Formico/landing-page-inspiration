import React, { Component } from 'react'

import './index.scss'

export default class CTA extends Component {
  render() {
    const {
      link,
      text,
      type
    } = this.props;

    return (
      <a
        className={ `button-cta ${!type || type === 'primary' ? 'primary' : 'secondary'}` }
        href={ link }>
          { text }
      </a>
    );
  }
}

