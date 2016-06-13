var React = require('react');
var styles = require('./product.css');

var Product = React.createClass({
  render: function() {
    return (
      <div className={styles.test}>
        <img />
        <h2>{this.props.name}</h2>
        <h3>{this.props.description}</h3>
      </div>
    );
  }
});

module.exports = Product;
