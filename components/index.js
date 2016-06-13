var React = require('react');
var connect = require('react-redux').connect;
var Product = require('./product');

function mapStateToProps (state) {
  return {
    inventory: state.inventory
  }
}

var Index = React.createClass({
  renderProducts: function() {
    return this.props.inventory.map(function(product) {
      return <Product key={product.sku} {...product} />;
    });
  },
  render: function() {
    return (
      <div>
        <p>Hello Home</p>

      </div>
    );
  }
});

module.exports = connect(mapStateToProps)(Index);
