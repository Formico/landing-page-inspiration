import React, { Component } from 'react'

import './index.scss'

export default class CTA extends Component {
  render() {
    const {
      link,
      text
    } = this.props;

    return (
      <a className="button-cta" href={ link }>{ text }</a>
    );
  }
}

