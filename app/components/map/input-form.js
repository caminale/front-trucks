import Component from '@ember/component';
import Ember from "ember";

export default Component.extend({
  address: '',
  launchAlgoGenetic: Ember.inject.service(),
  actions: {
    launchAlgo(){
      this.get('launchAlgoGenetic').launchAlgoGenetic();
    }
  }
});
