import React from 'react';
import Header from '../Components/Header/Header';
import './App.modules.css';

const App: React.FC = () => {
  return (
    <div className="appContainer">
      <Header name="Jason Chiang" subHeading="Software Engineer in Las Vegas" />
    </div>
  );
};

export default App;
