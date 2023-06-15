import React from 'react';

import DummyGraph from './DummyGraph';
import AppHeader from './AppBar';
import './App.css'

const App = () => {
  return (
    <div className='wrapper'>
      <AppHeader />
      <DummyGraph />
    </div>
  );
};

export default App;

