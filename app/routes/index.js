import Route from '@ember/routing/route';

export default Route.extend({
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
      console.log(userName+id);
      this.get('store').findRecord('user',id).then(function (user) {
        user.set('name',userName);
        user.save();
      })
    }
    }
});
