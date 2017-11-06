import Service from '@ember/service';

export default Service.extend({
  session: Ember.inject.service('session'),
  async register(name, password) {
    try {
      const user = this.get('store').createRecord('user', { name, password });

      // we make an request to server to know if the user exist
      $.ajax({
        url:' http://localhost:8080/availableUser',
        type:'POST',
        data: { name, password }
      });
      user.save();
    } catch (err) {
      // Problem
    }
  },
  async authenticate(identification, password) {
    try {
      await this.get('session').authenticate('authenticator:oauth2', identification, password);
    } catch (reason) {
      this.set('loginError', reason.error || reason);
    }
  }
});
