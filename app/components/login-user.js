import Component from '@ember/component';

export default Component.extend({
  userName: '',
  actions: {
    createUser(){
      this.sendAction('action', this.get('userName'));
    }
  }
});
