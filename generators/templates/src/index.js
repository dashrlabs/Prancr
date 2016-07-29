import React from 'react';
import ReactDOM from 'react-dom';

import Widget from './components/CoreWidget';

const fakeSettings = {
  get: (key, def) => {
    if (!key) return def;
    const value = localStorage.getItem(key);
    if (!value) return def;
    try {
      return JSON.parse(value) || def;
    } catch (e) {
      return def;
    }
  },
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
};

ReactDOM.render(<Widget settings={fakeSettings} />, document.querySelector('#container'));
