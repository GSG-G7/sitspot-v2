import React from 'react';
import { Steps, Button } from 'antd';
import subcomponents from './subcomponents';
import questions from '../../staticDataSet/questions';
import './style.css';

const { ErrorDisplay } = questions;

const { Step } = Steps;

const questionsAndComponents = questions.map(({ type, ...rest }) => ({
  content: subcomponents[type],
  error: null,
  ...rest,
}));

export default class StepsQuestions extends React.Component {
  state = {
    currentStep: 0,
    data: questions.reduce(
      (acc, { key }) => (key ? { ...acc, [key]: '' } : acc),
      {}
    ),
    isError: false,
  };

  handleStateChange = ({ key, value }) =>
    this.setState(({ data }) => ({ data: { ...data, [key]: value } }));

  changeIsError = isError => this.setState({ isError });

  renderContent = currentStep => {
    const {
      data,
      data: { country },
      isError,
    } = this.state;
    return questionsAndComponents.map(
      ({ content: Component, stepNo, key, question, options = {}, error }) => {
        const newOptions = { ...options };
        if (key === 'city') {
          newOptions.countrySelected = country;
        }
        if (currentStep === stepNo)
          return (
            <div className="content-wrapper" key={`content${stepNo}`}>
              <p>{question}</p>
              <div className="content__component">
                {Component && (
                  <Component
                    options={newOptions}
                    value={data[key]}
                    changeIsError={this.changeIsError}
                    handleStateChange={value =>
                      this.handleStateChange({ key, value })
                    }
                  />
                )}
                {isError && <ErrorDisplay error={error} />}
              </div>
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
          {currentStep === 0 && (
            <Button
              className="steps__btn steps__btn--right"
              type="primary"
              onClick={this.next}
            >
              Start
            </Button>
          )}
          {currentStep > 0 && (
            <Button
              className="steps__btn steps__btn--left"
              type="button"
              onClick={this.prev}
            >
              Previous
            </Button>
          )}
          {currentStep < questions.length - 1 && currentStep > 0 && (
            <Button
              className="steps__btn steps__btn--right"
              type="primary"
              onClick={this.next}
            >
              Next
            </Button>
          )}
          {currentStep === questions.length - 1 && (
            <Button
              className="steps__btn steps__btn--right"
              type="primary"
              onClick={() => {}}
            >
              Done
            </Button>
          )}
        </div>
      </div>
    );
  }
}
