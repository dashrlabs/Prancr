'use strict';
const yeoman = require('yeoman-generator');
const yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Let\'s make you a Widget!'
    ));

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the name of this widget?:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Give us a brief description of the widget:'
      },
      {
        type: 'input',
        name: 'author',
        message: 'What is your name?:'
      }
    ];

    return this.prompt(prompts)
      .then(props => {
        // To access props later use this.props.someAnswer;
        this.props = props;
        this.props.year = (new Date()).getFullYear();
        this.props.class = 'widget-' + Date.now();
        this.props.safe = props.name.replace(/ /g, '-');
        this.props.safeName = props.name.replace(/ /g, '');
      });
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('**/*'),
      this.destinationPath('./'),
      this.props
    );
    this.fs.copy(
      this.templatePath('.*'),
      this.destinationPath('./')
    );
  },

  install: function () {
    this.npmInstall();
  }
});
