import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('question', function() {
    this.route('index', {path: '/'});
    this.route('add');
    this.route('edit', {path: '/edit/:id'});
  });
  this.route('signin', function() {
    this.route('index', {path: '/'});
    this.route('signup');
    this.route('signout');
  });
});

export default Router;
