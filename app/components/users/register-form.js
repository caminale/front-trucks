import Component from '@ember/component';

export default Component.extend({
  identification: '',
  password: '',
  actions: {
    register(){
      console.log('yollooo'+password);
      this.sendAction('register', this.get('identification'),this.get('password'));
    }
  }
});
