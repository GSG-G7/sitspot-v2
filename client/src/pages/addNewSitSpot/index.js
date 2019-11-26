import React from 'react';
import { StepsQuestions2 as Steps } from '../../components';

import './style.css';

const onSubmit = something => something;

const AddNewSitspot = () => (
  <div id="add-place" className="add-place">
    <div className="add-place__header"> </div>
    <Steps onSubmit={onSubmit} />
  </div>
);

export default AddNewSitspot;
