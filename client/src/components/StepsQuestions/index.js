import React from 'react';
import { Steps } from 'antd';
import subcomponents from './subcomponents';
import questions from '../../staticDataSet/questions';

const { Step } = Steps;

const questionsAndComponents = questions.map(({ type, ...rest }) => ({
  content: subcomponents[type],
  ...rest,
}));

export default class StepsQuestions extends React.Component {
  state = {
    currentStep: 0,
    data: questions.reduce(
      (acc, { key }) => (key ? { ...acc, [key]: '' } : acc),
      {}
    ),
  };

  handleStateChange = ({ key, value }) =>
    this.setState(({ data }) => ({ data: { ...data, [key]: value } }));

  renderContent = () =>
    questionsAndComponents.map(({ content: Content, stepNo, key }) => {
      const { data } = this.state;
      return (
        <Content
          key={`content${stepNo}`}
          value={data[key]}
          handleStateChange={value => this.handleStateChange({ key, value })}
        />
      );
    });

  renderSteps = () => {
    const { currentStep } = this.state;
    return (
      <div className="steps-wrapper">
        <Steps current={currentStep}>
          {questionsAndComponents.map(({ stepNo }) => (
            <Step key={`step${stepNo}`} />
          ))}
        </Steps>
      </div>
    );
  };

  prev = () =>
    this.setState(({ currentStep }) => ({ currentStep: currentStep - 1 }));

  next = () =>
    this.setState(({ currentStep }) => ({ currentStep: currentStep + 1 }));

  render() {
    const { currentStep } = this.state;
    // const { onSubmit } = this.props;
    // console.log(this.state.questions);
    return (
      <div>
        {this.renderSteps()}
        {this.renderContent()}
        <div className="form-controls">
          {currentStep > 0 && (
            <button type="button" onClick={this.prev}>
              Previous
            </button>
          )}
          {currentStep < questions.length - 1 && (
            <button type="button" onClick={this.next}>
              Next
            </button>
          )}
          {currentStep === questions.length - 1 && (
            <button type="button" onClick={() => {}}>
              Done
            </button>
          )}
        </div>
      </div>
    );
  }
}
