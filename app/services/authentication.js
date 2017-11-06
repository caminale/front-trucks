import Service from '@ember/service';
import Ember from 'ember';

export default Service.extend({
  session: Ember.inject.service('session'),
  store: Ember.inject.service(),

  async register(name, password) {
    try {
      const user = this.get('store').createRecord('user', { name, password });

      // we make an request to server to know if the user exist
      $.ajax({
        url:' http://localhost:8080/availableUser',
        type:'POST',
        data: { name, password },
        success: function (data) {
          if(data.result === 'okUserNotExisting')
            user.save();
        }
      });
      this.authenticate( name, password );
    } catch (err) {
      console.log(err);
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
