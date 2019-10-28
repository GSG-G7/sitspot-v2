import React from 'react';
import { MagicalFactor } from '../components';
import './style.css';
import Keywords from '../components/MagicalFactor/keywords';

const App = () => {
  const { family, solo, wildlife } = Keywords;
  return (
    <div className="App">
      <MagicalFactor
        value={family}
        reviewText="HI its was soooooooo  nieeeeuuaskldjas"
      />
      <MagicalFactor
        value={wildlife}
        reviewText="HI its was soooooooo asddddddddddddddddddddddddddddddddnieeeeuuaskldjasasddddddddddddddddddddddddddddddddnieeeeuuaskldjasasddddddddddddddddddddddddddddddddnieeeeuuaskldjasasddddddddddddddddddddddddddddddddnieeeeuuaskldjas asddddddddddddddddddddddddddddddddnieeeeuuaskldjas"
      />
      <MagicalFactor
        value={solo}
        reviewText="HI its was soooooooo  nieeeeuuaskldjas"
      />
    </div>
  );
};

export default App;
