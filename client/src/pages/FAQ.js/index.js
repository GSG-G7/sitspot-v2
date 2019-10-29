import React from 'react';
import { Collapse } from 'antd';

import bgImage from '../../assets/FAQ-header.png';

import './index.css';

const FAQ = () => {
  const { Panel } = Collapse;
  const text =
    'A sitspot is a business (a place to stay, to eat or drink, or to shop) which combines 2 charactristics:';
  return (
    <div className="faq">
      <div className="faq__header">
        <img src={bgImage} alt="backgorund" className="faq__header__img" />
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
        <div id="faq1" className="faq__content__questions">
          <Collapse bordered={false} accordion>
            <Panel header="About SitSpot" key="1">
              <Collapse defaultActiveKey="1">
                <Panel
                  className="sub-title"
                  header="what's sitspot?"
                  // showArrow={false}
                  key="1"
                >
                  {text}
                </Panel>
                <Panel
                  className="sub-title"
                  header="Who can write sitspot recommendations?"
                  key="2"
                >
                  {text}
                </Panel>
                <Panel
                  className="sub-title"
                  header="Which businesses can I recommend?"
                  key="3"
                >
                  {text}
                </Panel>
              </Collapse>
            </Panel>
            <Panel header="Sustainability" key="2" style={{ border: 0 }}>
              <p>{text}</p>
            </Panel>
            <Panel
              header="Writting recommendation"
              key="3"
              style={{ border: 0 }}
            >
              <p>{text}</p>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
