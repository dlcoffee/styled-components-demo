import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const title = 'title';

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);

module.hot.accept();
