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

  renderContent = currentStep => {
    const {
      data,
      data: { country },
    } = this.state;
    return questionsAndComponents.map(
      ({ content: Component, stepNo, key, question, options = {} }) => {
        const newOptions = { ...options };
        if (key === 'city') {
          newOptions.countrySelected = country;
        }
        if (currentStep === stepNo)
          return (
            <div key={`content${stepNo}`}>
              <p>{question}</p>
              <Component
                options={newOptions}
                value={data[key]}
                handleStateChange={value =>
                  this.handleStateChange({ key, value })
                }
              />
            </div>
          );
        return '';
      }
    );
  };

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
        {this.renderContent(currentStep)}
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
