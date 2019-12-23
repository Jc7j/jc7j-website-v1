import React from 'react';
import Header from './Components/Header/Header';
import './App.modules.css';

const App: React.FC = () => {
  const headerDescription: string =
    'Skilled with using React, Redux, Typescript and more to develop beautiful, interactive websites.';

  return (
    <div className="appContainer">
      <Header
        name="Jason Chiang"
        subHeading="Software Engineer in Las Vegas"
        description={headerDescription}
      />
    </div>
  );
};

export default App;
