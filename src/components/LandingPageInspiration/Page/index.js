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
    const imageList = [{ 
        img:   images.mobile,
        title: 'Mobile',
      }, {
        img:   images.tablet,
        title: 'Tablet',
      }, {
        img:   images.desktop,
        title: 'Desktop',
      }];

    screenshots = imageList.map((img, idx) => (
      <div key={ idx } className="preview-wrapper">
        <h4>{ img.title }</h4>
        <div className="preview">
          <Img fluid={ img.img } />
        </div>
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
        <a className="site-link" href={ url }>{ url }</a>
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
