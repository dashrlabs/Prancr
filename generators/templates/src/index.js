import React from 'react';
import ReactDOM from 'react-dom';

import Widget from './components/CoreWidget';

const fakeSettings = {
  get: (key) => {
    const value = localStorage.getItem(key);
    if (!key) return null;
    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

ReactDOM.render(<Widget settings={fakeSettings} />, document.querySelector('#container'));
