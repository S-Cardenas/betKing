import React from 'react';
import TopNavBar from './top_nav_bar/top_nav_bar';

const App = ({ children }) => (
  <div className="App">
    <TopNavBar />
    {children}
  </div>
);

export default App;
