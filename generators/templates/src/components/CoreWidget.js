/** Do not rename this file **/
import React from 'react';

export default class <%= safeName %>Widget extends React.Component {
  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    settings: React.PropTypes.object.isRequired,
  };

  static id = '<%= safe %>';
  static widgetName = '<%= name %>';
  static sizes = [[2, 2]];

  render() {
    return (
      <div>Hello World - This is your new widget</div>
    );
  }
}
