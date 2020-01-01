import React from 'react';
import Header from './Components/Header/Header';
import { HashRouter } from 'react-router-dom';

import './App.modules.css';

const App: React.FC = () => {
  return (
    <HashRouter basename="/">
      <div className="appContainer">
        <Header
          name="Jason Chiang"
          subHeading="Software Engineer in Las Vegas"
        />
      </div>
    </HashRouter>
  );
};

export default App;
