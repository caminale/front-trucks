import Controller from '@ember/controller';
import Ember from 'ember';

export default Ember.Controller.extend({
  sortProperties: ['name:asc'],
  user: Ember.computed.sort('model.users', 'sortProperties'),
});
