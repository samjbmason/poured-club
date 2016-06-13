var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header></header>
          { this.props.children }
        <footer></footer>
      </div>
    );
  }
});


module.exports = App;
