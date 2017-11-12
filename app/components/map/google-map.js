import Component from '@ember/component';
const google = window.google;
import Ember from 'ember';

export default Component.extend({

  didInsertElement() {
    this.insertMap()
  },
  insertMap: function() {
    let container = this.$('.map-container')[0];
    var options = {
      center: new google.maps.LatLng(
        this.get('latitude'),
        this.get('longitude')
      ),
      zoom: 15
    };
   new google.maps.Map(container, options);
  },
});

