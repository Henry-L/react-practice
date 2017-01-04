import React from 'react';
import ReactDOM from 'react-dom';

import App from './modules/App';

let schema = require('json!./schema.json');

ReactDOM.render(
  <App schema={schema}/>,
  document.getElementById('app')
);
