import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin,{
  model() {
    return Ember.RSVP.hash({
      users: this.get('store').findAll('user')
    });
  },
  actions: {
    createUser(name) {
      const user = this.get('store').createRecord('user', {name});

      user.save();
    },
    deleteUser(id) {
      this.store.findRecord('user', id ,{ backgroundReload: false }).then(function(user) {
        user.deleteRecord();
        user.get('isDeleted'); // => true
        user.save(); // => DELETE to /users/1
      });
    },
    updateUser(id,userName) {
      this.get('store').findRecord('user',id).then(function (user) {
        user.set('name',userName);
        user.save();
      })
    }
  }
});
