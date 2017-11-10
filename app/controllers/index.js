import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  sortProperties: ['name:asc'],
  user: Ember.computed.sort('model.users', 'sortProperties'),

  actions: {
    logout  () {
      console.log('deconnection');
      this.get('session').invalidate();
    }
  }
});

