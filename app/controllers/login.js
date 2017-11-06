import Ember from 'ember';

export default Ember.Controller.extend({
  authentication: Ember.inject.service('authentication'),
  actions: {
    authenticate() {
      const { identification, password } = this.getProperties('identification', 'password');
      this.get('authentication').authenticate(identification, password);
    }
  }
});
