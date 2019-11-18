import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(withRouter(<App />), div);
  ReactDOM.unmountComponentAtNode(div);
});
