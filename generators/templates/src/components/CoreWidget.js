/** Do not rename this file **/
import React from 'react';

export default class MyNewWidget extends React.Component {
  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    settings: React.PropTypes.object.isRequired,
  };

  static id = '<%= safeName %>';
  static widgetName = 'your-widget-name';
  static sizes = [[2, 2]];

  render() {
    return (
      <div>Hello World - This is your new widget</div>
    );
  }
}
