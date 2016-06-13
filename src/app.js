var React = require('react');
var ReactDOM = require('react-dom');

var Redux = require('redux');
var ReactRedux = require('react-redux');
var Provider = ReactRedux.Provider;
var createStore = Redux.createStore;

var Router = require('react-router').Router;
var browserHistory = require('react-router').browserHistory;
var routes = require('../routes');

var shop = require('../reducers');
var initialStore = require('../initial_store');
var store = createStore(shop, initialStore, window.devToolsExtension && window.devToolsExtension());

console.log(store)

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
