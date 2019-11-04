import React from 'react';
import questions from './fakeData';
import { CollapsePanel } from '../../components';

import './index.css';

const AboutUs = () => {
  return (
    <div className="about">
      <div className="about__header">
        <h3 className="about__header__title">About us</h3>
      </div>
      <div id="faq__questions" className="about__content">
        <CollapsePanel
          questions={questions}
          style={{
            mainTitle: 'about__main-title',
            pClass: 'about__paragraph',
            ulClass: 'about--ul',
            liClass: 'about--li',
            imgClass: 'about--img',
            spanClass: 'about__contact--email',
          }}
        />
      </div>
    </div>
  );
};

export default AboutUs;
