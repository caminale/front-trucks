import Route from '@ember/routing/route';

export default Route.extend({
  authentication: Ember.inject.service('authentication'),
  actions: {
    login( name, password ) {
      this.get('authentication').authenticate( name, password );
    }
  }
});
