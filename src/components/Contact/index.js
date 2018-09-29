import React from 'react';
import Typing from 'react-typing-animation';

import CTA from '../CTA';

import './index.scss'

const Contact = () => (
  <div className="contact">
    <h2>
      <Typing
        cursorClassName="cursor"
        speed={ 100 }
        loop={ true }>
        Are you ready to...{" "} 
          <Typing.Delay ms={1000} />
          build your mvp?
          <Typing.Delay ms={6000} />
          <Typing.Backspace count={15} />
          <Typing.Delay ms={2000} />
          upgrade your architecture?
          <Typing.Delay ms={6000} />
          <Typing.Backspace count={27} />
          <Typing.Delay ms={2000} />
          launch your mobile app?
          <Typing.Delay ms={6000} />
          <Typing.Backspace count={46} />
          <Typing.Delay ms={2000} />
      </Typing>
    </h2>
    <CTA text="Contact Us" link="https://formico.typeform.com/to/CvuKzs" />
  </div>
)

export default Contact
