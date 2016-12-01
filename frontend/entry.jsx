//React
import React from 'react';
import ReactDOM from 'react-dom';

//Import Store and Root Component
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", function() {
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
});
