/** Do not rename this file **/
import React from 'react';

export default class MyNewWidget extends React.Component {
  static propTypes = {
    settings: React.PropTypes.object.isRequired,
  };

  static id = 'your-widget-id';
  static widgetName = 'your-widget-name';
  static sizes = [[1, 1]];

  render() {
    return (
      <div>Hello World - This is your new widget</div>
    );
  }
}
