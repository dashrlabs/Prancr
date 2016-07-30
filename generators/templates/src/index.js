import React from 'react';
import ReactDOM from 'react-dom';

import Widget from './components/CoreWidget';

export default class Settings extends React.Component {
  static propTypes = {
    app: React.PropTypes.func,
    children: React.PropTypes.object,
  };

  constructor(...args) {
    super(...args);
    this.state = {
      data: {},
    };

    const loadedData = localStorage.getItem('store');
    if (loadedData) {
      try {
        this.state.data = JSON.parse(loadedData);
      } catch (e) {
        // Who cares
      }
    }
  }

  getProto() {
    return {
      get: this.get.bind(this),
      set: this.set.bind(this),
    };
  }

  get(key, defaultValue) {
    return this.state.data[key] || defaultValue;
  }

  set(key, value) {
    this.setState({
      data: Object.assign({}, this.state.data, { [key]: value }),
    }, () => {
      this._save();
    });
  }

  _save() {
    localStorage.setItem('store', JSON.stringify(this.state.data));
  }

  render() {
    return (<this.props.app
      width={2}
      height={2}
      settings={this.getProto()}
    />);
  }
}

ReactDOM.render(<Settings app={Widget} />, document.querySelector('#container'));
