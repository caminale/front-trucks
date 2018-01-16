import Component from '@ember/component';
import Ember from "ember";

export default Component.extend({
  address: '',
  launchAlgoGenetic: Ember.inject.service(),
  actions: {
    launchAlgo() {
      let trucks = this.get('truck');
      for (let i = 0; i <= trucks.content.length; i++) {
        if (trucks.content[i]._data.delivering === false) {
          console.log(`Simulation Launched`);
          this.sendAction('launchtruck', trucks.content[i].id);

          this.get('launchAlgoGenetic').launchAlgoGenetic(trucks.content[i].id);
          break;
        }
        else {
          console.log(`not truck available`);
        }
      }
    }
  }
});
