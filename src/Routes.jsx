var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Routes = (
    <Router>
        <Route path="/" component={Base} >
            <Route path="/" component={Page1} />
            <Route path="/" component={Page2} />
        </Route>
    </Router>
);

module.exports = Routes;
