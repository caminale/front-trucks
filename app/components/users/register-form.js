import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  session: Ember.inject.service('session'),

  identification: '',
  password: '',
  actions: {
    register(){
      this.sendAction('register', this.get('identification'),this.get('password'));
      let { identification, password } = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:oauth2', identification, password).catch((reason) => {
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
