import React from 'react'
import Link from 'gatsby-link'

import Quote from './Quote';
import FlashyText from '../FlashyText';

import './index.scss'

const quotes = [
  {
    text: "They did a really good job. Just the best really. Highly Reccomend. Yada yda yda.",
    image: "",
    person: "Tony Baloney",
    title: "CTO",
    company: "Google",
  },
  {
    text: "Wow. Can't believe how amazing and yada yada they were so good",
    image: "",
    person: "Sarah Sogood",
    title: "CEO",
    company: "Amazon",
  }
].map((quote, idx) => (
  <Quote
    text={ quote.text }
    image={ quote.image }
    person={ quote.person }
    title={ quote.title }
    company={ quote.company } />
));

const Testimonials = () => (
  <div className="testimonials">
    <h1 className="hero"><FlashyText text="What our clients are saying about us" /></h1>
    <h1 className="mobile">What our clients are saying about us</h1>
    <div className="quotes">
      { quotes }
    </div>
  </div>
)

export default Testimonials
