var express = require('express');
var stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
var React = require('react');
var renderToString = require('react-dom/server').renderToString;

var ReactRouter = require('react-router');
var RouterContext = ReactRouter.RouterContext;
var routes = require('./routes');

// Setup the app instance
var app = express();

// Set static assets to live in public folder
app.use(express.static('public'));

// Use ejs as view engine, this just renders the basic stuff React will take over
app.set('view engine', 'ejs');

// Match every incoming path to this route, we use React Router to handle stuff
app.get('*', function(req, res) {

  // ReactRouter will take over and attempt to match routes from the routes object
  ReactRouter.match({
    routes: routes,
    location: req.url
  }, function(err, redirectLocation, props) {
    if (err) {
      // something went badly wrong, so 500 with a message
      res.status(500).send(err.message);

    } else if (redirectLocation) {
      // we matched a ReactRouter redirect, so redirect from the server
      res.redirect(302, redirectLocation.pathname + redirectLocation.search);

    } else if (props) {
      // if we got props, that means we found a valid component to render for the given route
      // we use render to string to convert the html into a string that can be passed down
      var markup = renderToString(
        // This passes down the components through props into the router context
        // The client side version of this is in `src/app.js`
        <RouterContext {...props} />
      );

      // render `index.ejs`, but pass in the markup we want it to display
      res.render('index', { markup })

    } else {
      // no route match, so 404. In a real app you might render a custom
      // 404 view here
      res.sendStatus(404);

    }
  });
});

// Setup app listening and if there is an error show it console and return
var server = app.listen(process.env.PORT || 3005, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`==> 🌎 Listening at http://localhost:${server.address().port}`);
});
