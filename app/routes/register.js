import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    register(name, password) {
      const user = this.get('store').createRecord('user', {name:name, password:password});
      user.save();
    }
  }
});
