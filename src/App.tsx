import React from 'react';
import Header from './Components/Header/Header';
import { HashRouter } from 'react-router-dom';

import './App.modules.css';

const App: React.FC = () => {
  const headerDescription: string =
    'Skilled with using React, Redux, Typescript and more to develop beautiful, interactive websites.';

  return (
    <HashRouter basename="/">
      <div className="appContainer">
        <Header
          name="Jason Chiang"
          subHeading="Software Engineer in Las Vegas"
          description={headerDescription}
        />
      </div>
    </HashRouter>
  );
};

export default App;
