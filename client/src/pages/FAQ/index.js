import React from 'react';
import questions from './fakeData';
import { CollapsePanel } from '../../components';

import './index.css';

const FAQ = () => {
  return (
    <div className="faq">
      <div className="faq__header">
        <h3 className="faq__header__title">FAQ</h3>
      </div>
      <div className="faq__content">
        <p className="faq__content__desc">
          The following Q&amp;A should hopefully answer your questions. If not,
          get in touch at
          <span className="faq__content--email">
            {' '}
            reviews@mysitspot.com
          </span>{' '}
          for a chat.
        </p>
        <CollapsePanel questions={questions} />
      </div>
    </div>
  );
};

export default FAQ;
