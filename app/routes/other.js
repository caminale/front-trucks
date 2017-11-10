import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return Ember.RSVP.hash({
      users: this.get('store').findAll('user')
    });
  },
});
