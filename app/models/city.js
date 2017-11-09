import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  ressources: DS.attr('number'),
  lat: DS.attr('string'),
  lng: DS.attr('string')

});
