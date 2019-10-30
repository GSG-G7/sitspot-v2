import React from 'react';
import { Collapse } from 'antd';
import questions from './fakeData';

import './index.css';

const FAQ = () => {
  const { Panel } = Collapse;

  const handlerPanel = arr => {
    const mainQuestions = [];
    arr.forEach((mainQuestion, index) => {
      if (mainQuestion.contentSubQ) {
        mainQuestions.push(
          <Panel key={`key${index + 1}`} header={mainQuestion.title}>
            <Collapse defaultActiveKey="key1">
              {mainQuestion.contentSubQ.map((subQuestion, index1) => {
                return (
                  <Panel
                    className="sub-title"
                    header={subQuestion.title}
                    key={`key${index1 + 1}`}
                  >
                    {subQuestion.content.map((questionContent, index2) => {
                      const TagName = questionContent.tag;

                      return (
                        <TagName key={`key${index2 + 1}`}>
                          {questionContent.value}
                        </TagName>
                      );
                    })}
                  </Panel>
                );
              })}
            </Collapse>
          </Panel>
        );
      } else {
        mainQuestions.push(
          <Panel key={`key${index + 1}`} header={mainQuestion.title}>
            {mainQuestion.content.map((questionContent, index3) => {
              const TagName = questionContent.tag;
              if (questionContent.parent) {
                const ParentTag = questionContent.parent;
                return (
                  <ParentTag key={`key${index3 + 1}`}>
                    {questionContent.value.map((value, index4) => (
                      <TagName key={`key${index4 + 1}`}>{value}</TagName>
                    ))}
                  </ParentTag>
                );
              }
              return (
                <TagName key={`key${index3 + 1}`}>
                  {questionContent.value}
                </TagName>
              );
            })}
          </Panel>
        );
      }
    });

    return mainQuestions;
  };

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
        <div id="faq1" className="faq__content__questions">
          <Collapse accordion>{handlerPanel(questions)}</Collapse>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
