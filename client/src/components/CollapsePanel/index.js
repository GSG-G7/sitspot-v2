import React from 'react';
import propTypes from 'prop-types';
import { Collapse } from 'antd';

import './index.css';

const { Panel } = Collapse;

const renderTag = (content, className) => {
  const TagName = content.tag;
  return content.values.map((element, index2) => (
    <TagName key={`${TagName}${index2 + 1}`} className={className}>
      {element}
    </TagName>
  ));
};

const renderParentTag = (content, classParent, classChild, keyParent) => {
  const ParentName = content.parent;
  const TagName = content.tag;
  return (
    <ParentName key={keyParent} className={classParent}>
      {content.values.map((element, index1) => {
        return (
          <TagName key={`${TagName}${index1 + 1}`} className={classChild}>
            {element}
          </TagName>
        );
      })}
    </ParentName>
  );
};

const renderImgTag = (content, className) => (
  <img
    key={content.value}
    className={className}
    src={content.value}
    alt="images question"
  />
);

const renderChild = (content, classParent, classChild, keyParent) => {
  const ChildName = content.child.tag;
  const TagName = content.tag;
  return (
    <TagName key={keyParent} className={classParent}>
      {content.value}
      <ChildName className={classChild}>{content.child.value}</ChildName>
    </TagName>
  );
};

const renderQuestion = (question, objStyle) =>
  question.content.map((content, index) => {
    const TagName = content.tag;
    const classTag = objStyle[`${TagName}Class`];
    if (content.parent) {
      const ParentName = content.parent;
      const classParent = objStyle[`${ParentName}Class`];
      const keyParent = ParentName + index + 1;
      return renderParentTag(content, classParent, classTag, keyParent);
    }
    if (content.tag === 'img') {
      return renderImgTag(content, classTag);
    }
    if (content.child) {
      const ChildName = content.child.tag;
      const classChild = objStyle[`${ChildName}Class`];
      const keyParent = TagName + index + 1;
      return renderChild(content, classTag, classChild, keyParent);
    }
    return renderTag(content, classTag);
  });

const renderSubQuestions = (question, objStyle, index) => {
  return (
    <Panel
      key={question.title}
      className={`${objStyle.mainTitle}-${index + 1}`}
      header={question.title}
    >
      <Collapse defaultActiveKey="whats sitspot?" accordion>
        {question.content.map(subQuestion => {
          return (
            <Panel
              className="sub-header"
              header={subQuestion.title}
              key={subQuestion.title}
            >
              {renderQuestion(subQuestion, objStyle)}
            </Panel>
          );
        })}
      </Collapse>
    </Panel>
  );
};

const CollapsePanel = ({ questions, subCollapse, style }) => (
  <Collapse accordion>
    {questions.map((question, index) => {
      if (subCollapse && subCollapse[index + 1])
        return renderSubQuestions(question, style, index);
      return (
        <Panel
          className={`${style.mainTitle}-${index + 1}`}
          header={question.title}
          key={question.title}
        >
          {renderQuestion(question, style)}
        </Panel>
      );
    })}
  </Collapse>
);

CollapsePanel.propTypes = {
  questions: propTypes.arrayOf(propTypes.any).isRequired,
  subCollapse: propTypes.objectOf(propTypes.any),
  style: propTypes.objectOf(propTypes.any),
};

CollapsePanel.defaultProps = {
  subCollapse: null,
  style: null,
};

export default CollapsePanel;
