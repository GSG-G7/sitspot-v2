import React from 'react';
import propTypes from 'prop-types';
import { Steps, Button, Spin } from 'antd';
import subcomponents from './subcomponents';
import questions from '../../staticDataSet/questions';
import requiredStringSchema from '../../utils/addPlaceValidation';
import './style.css';

const { ErrorDisplay } = subcomponents;

const { Step } = Steps;

const questionsAndComponents = questions.map(({ type, ...rest }) => ({
  content: subcomponents[type],
  ...rest,
}));
const requiredDictionary = questions.reduce(
  (acc, { required, key }) => ({ ...acc, [key]: required }),
  {}
);

export default class StepsQuestions extends React.Component {
  state = {
    currentStep: 0,
    data: questions.reduce(
      (acc, { key }) => (key ? { ...acc, [key]: '' } : acc),
      {}
    ),
    error: '',
  };

  validateCurrentField = () => {
    const { currentStep, data } = this.state;
    const [key, value] = Object.entries(data)[currentStep];
    if (requiredDictionary[key])
      return requiredStringSchema(key)
        .validate(value)
        .then(() => this.setState({ error: '' }))
        .catch(({ message }) => this.setState({ error: message }));
    return Promise.resolve(value);
  };

  handleStateChange = ({ key, value }) =>
    this.setState(
      ({ data }) => ({ data: { ...data, [key]: value } }),
      this.validateCurrentField
    );

  changeIsError = error => this.setState({ error });

  renderContent = currentStep => {
    const {
      data,
      data: { country },
      error,
    } = this.state;
    return questionsAndComponents.map(
      ({ content: Component, key, question, options = {} }, index) => {
        const newOptions = { ...options };
        if (key === 'city') {
          newOptions.countrySelected = country;
        }
        if (currentStep === index)
          return (
            <div className="content-wrapper" key={`content${index + 1}`}>
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
              </div>
              {error && <ErrorDisplay error={error} />}
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
          {questionsAndComponents.map(({ key }) => (
            <Step key={`step${key}`} />
          ))}
        </Steps>
      </div>
    );
  };

  prev = () =>
    this.setState(({ currentStep }) => ({
      currentStep: currentStep - 1,
      error: '',
    }));

  next = () =>
    this.validateCurrentField().then(() => {
      const { error } = this.state;
      if (!error)
        this.setState(({ currentStep }) => ({
          currentStep: currentStep + 1,
        }));
    });

  render() {
    const { onSubmit, loading } = this.props;
    const { currentStep, data } = this.state;
    return loading ? (
      <Spin />
    ) : (
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
              onClick={() => onSubmit(data)}
            >
              Done
            </Button>
          )}
        </div>
      </div>
    );
  }
}

StepsQuestions.propTypes = {
  onSubmit: propTypes.func.isRequired,
  loading: propTypes.bool.isRequired,
};
