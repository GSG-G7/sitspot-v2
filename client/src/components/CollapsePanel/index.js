import React from 'react';
import propTypes from 'prop-types';
import { Collapse } from 'antd';

import './index.css';

const handlerPanel = arr => {
  const mainQuestions = [];
  const { Panel } = Collapse;

  arr.forEach((mainQuestion, index) => {
    if (mainQuestion.contentSubQ) {
      mainQuestions.push(
        <Panel id="faq1" key={`key${index + 1}`} header={mainQuestion.title}>
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

const CollapsePanel = ({ questions }) => {
  return (
    <div id="faq__questions">
      <Collapse accordion>{handlerPanel(questions)}</Collapse>
    </div>
  );
};

CollapsePanel.propTypes = {
  questions: propTypes.arrayOf(propTypes.any).isRequired,
};

export default CollapsePanel;
