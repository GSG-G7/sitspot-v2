import React from 'react';
import { StepsQuestions2 as Steps } from '../../components';

import './style.css';

const onSubmit = something => something;

const AddNewSitspot = () => (
  <div id="add-place" className="add-place">
    <div className="add-place__header"> </div>
    <div className="add-place__content">
      <Steps onSubmit={onSubmit} />
    </div>
  </div>
);

export default AddNewSitspot;
