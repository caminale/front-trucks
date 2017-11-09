import Component from '@ember/component';

export default Component.extend({

  address: '',

  actions: {
    searchPos(){
      this.sendAction('searchPos', this.get('address'));
    }
  }
});
