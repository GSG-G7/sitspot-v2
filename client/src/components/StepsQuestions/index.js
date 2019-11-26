import React from 'react';
import propTypes from 'prop-types';
import { Steps, Button, Select, Radio } from 'antd';
import { getCountryNames, getCities } from 'full-countries-cities';

import UploadImg from './UploadImg';
import renderOptions from '../../utils/renderOptionsList';

import './index.css';

const { Step } = Steps;

const BusinessTypes = Object.freeze({
  stay: 'place to stay',
  eat: 'place to eat or drink',
  shop: 'place to shop',
});

const ButtonInfo = Object.freeze({
  START: 'Start',
  NEXT: 'Next',
  PREVIOUS: 'Previous',
  DONE: 'Done',
  TYPE: 'primary',
  MESSAGE: 'Processing complete!',
});

const renderError = msg => (
  <div className="error-box">
    <p className="error-box__message">{msg}</p>
  </div>
);

const checkError = (currentStep, errors) => {
  if (currentStep === 1) {
    if (errors.name) {
      return renderError(errors.name);
    }
  } else if (currentStep === 3) {
    if (errors.country) {
      return renderError(errors.country);
    }
  } else if (currentStep === 4) {
    if (errors.city) {
      return renderError(errors.city);
    }
  } else if (currentStep === 5) {
    if (errors.businessType) {
      return renderError(errors.businessType);
    }
  }
  return undefined;
};

const renderInput = (values, currentStep, funcs) => {
  const stateKey = currentStep === 1 ? 'name' : 'linkSite';
  return (
    <input
      className="input "
      type="text"
      placeholder={currentStep === 1 ? 'Type your answer here' : 'http://'}
      value={currentStep === 1 ? values.name : values.linkSite}
      onChange={event => {
        funcs.handleChange(event.target.value, stateKey);
      }}
    />
  );
};

const dropDownFilter = (input, option) =>
  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0;

const renderSelect = (values, currentStep, funcs) => {
  const stateKey = currentStep === 3 ? 'country' : 'city';
  let cities;
  if (currentStep === 4) {
    cities = values.country ? getCities(values.country) : [];
  }
  return (
    <Select
      className="ant-select-country country-w-city"
      showSearch
      placeholder="Select"
      optionFilterProp="children"
      value={currentStep === 3 ? values.country : values.city}
      onChange={value => funcs.handleChange(value, stateKey)}
      filterOption={dropDownFilter}
    >
      {currentStep === 3
        ? renderOptions(getCountryNames())
        : renderOptions(cities)}
    </Select>
  );
};

const renderRadio = (values, funcs) => (
  <Radio.Group value={values.businessType} buttonStyle="solid">
    {Object.entries(BusinessTypes).map(([key, value]) => (
      <Radio.Button
        key={key}
        value={key}
        onClick={event =>
          funcs.handleChange(event.target.value, 'businessType')
        }
      >
        {value}
      </Radio.Button>
    ))}
  </Radio.Group>
);

const renderQuestion = (
  questions,
  values,
  currentStep,
  funcs,
  classes,
  required
) => (
  <div className={classes[currentStep]}>
    {currentStep > 0 && (
      <div>
        <h2 className={`title ${classes[currentStep]}__title`}>
          {questions[currentStep].title}
          {required[currentStep] ? (
            <span className="span-required">*</span>
          ) : (
            ''
          )}
        </h2>
      </div>
    )}
    {questions[currentStep].imgUrl && (
      <div className="img__box">
        <img
          className="img__box--img"
          src={questions[currentStep].imgUrl}
          alt="img question"
        />
      </div>
    )}
    {currentStep === 0 && (
      <p className="welcome__message">{questions[0].message}</p>
    )}
    {currentStep <= 2 &&
      currentStep > 0 &&
      renderInput(values, currentStep, funcs)}
    {currentStep >= 3 &&
      currentStep < 5 &&
      renderSelect(values, currentStep, funcs, classes)}

    {currentStep === 5 && renderRadio(values, funcs)}
    {currentStep >= 6 && currentStep <= 7 && (
      <UploadImg
        values={values}
        currentStep={currentStep}
        handleChange={funcs.handleChange}
      />
    )}
  </div>
);

const renderButton = (text, type, func, checkRequirdStep = false) => (
  <Button
    className={`steps__btn steps__btn--${!type ? 'left' : 'right'}`}
    type={type || ''}
    onClick={() => (!checkRequirdStep ? func() : func(true))}
  >
    {text}
  </Button>
);

const StepsQuestions = ({
  questions,
  currentStep,
  values,
  funcs,
  classes,
  required,
  errors,
}) => (
  <div className="steps">
    <Steps current={currentStep}>
      {questions.map(({ id }) => (
        <Step key={id} />
      ))}
    </Steps>
    <div className="steps-content">
      {renderQuestion(questions, values, currentStep, funcs, classes, required)}
    </div>
    <div className="steps-action">
      {checkError(currentStep, errors)}
      <div className="steps-action__buttons">
        {currentStep < questions.length - 1 &&
          renderButton(
            currentStep === 0 ? ButtonInfo.START : ButtonInfo.NEXT,
            ButtonInfo.TYPE,
            currentStep === 0 || currentStep === 2 || currentStep === 6
              ? funcs.next
              : funcs.handleValidate,
            true
          )}

        {currentStep === questions.length - 1 &&
          renderButton(ButtonInfo.DONE, ButtonInfo.TYPE, funcs.onSubmit)}

        {currentStep > 0 && renderButton(ButtonInfo.PREVIOUS, null, funcs.prev)}
      </div>
    </div>
  </div>
);

StepsQuestions.propTypes = {
  currentStep: propTypes.number.isRequired,
  classes: propTypes.arrayOf(propTypes.string),
  questions: propTypes.arrayOf(propTypes.any).isRequired,
  funcs: propTypes.shape({
    next: propTypes.func.isRequired,
    prev: propTypes.func.isRequired,
    handleChange: propTypes.func.isRequired,
    onSubmit: propTypes.func.isRequired,
    handleValidate: propTypes.func.isRequired,
  }).isRequired,
  values: propTypes.shape({
    name: propTypes.string.isRequired,
    linkSite: propTypes.string.isRequired,
    country: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    businessType: propTypes.string.isRequired,
    imgUrlOne: propTypes.string,
    imgUrlTwo: propTypes.string,
  }).isRequired,
  required: propTypes.objectOf(propTypes.bool),
  errors: propTypes.objectOf(propTypes.any),
};

StepsQuestions.defaultProps = {
  classes: '',
  required: {},
  errors: {},
};

export default StepsQuestions;
