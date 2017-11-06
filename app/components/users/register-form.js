import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
  session: Ember.inject.service('session'),

  identification: '',
  password: '',
  actions: {
    register(){
      this.sendAction('register', this.get('identification'),this.get('password'));
    }
  }
});
