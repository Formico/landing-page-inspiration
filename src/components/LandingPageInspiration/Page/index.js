import React from 'react'
import Img from "gatsby-image"

import './index.scss';

const Page = ({
  title,
  url,
  categories,
  images
}) => {

  let screenshots = [];
    
  if (images) {
    const imageList = [images.mobile, images.tablet, images.desktop];

    screenshots = imageList.map((img, idx) => (
      <div className="screenshot">
        <Img fluid={ img } />
      </div>
    ));
  }

  let categoryTags = '';

  if (categories) {
    categoryTags = categories.split(', ').map(category => ( `#${category} ` ));
  }

  return (
    <div className="page">
      <section className="text-info">
        <h2>{ title }</h2>
        <a href={ url }>{ url }</a>
        <div className="categories">
          { categoryTags }
        </div>
      </section>
      <div className="images-container">
        { screenshots }
      </div>
    </div>
  )
}

export default Page;
