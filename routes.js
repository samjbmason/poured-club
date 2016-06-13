var AppComponent = require('./components/app');
var IndexComponent = require('./components/index');
var CheckoutComponent = require('./components/checkout');

var routes = {
  path: '',
  component: AppComponent,
  childRoutes: [{
    path: '/',
    component: IndexComponent
  },
  {
    path: '/checkout',
    component: CheckoutComponent
  }]
}

module.exports = routes;
