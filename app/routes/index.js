import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    createUser(name) {
      const user = this.get('store').createRecord('user', {name});
      //console.log(`luser ${user}`);

      user.save();
    }
  }
});
