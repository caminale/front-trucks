import DS from 'ember-data';

export default DS.Model.extend({
  truck: DS.belongsTo('journey', {inverse: 'truck'}),
  steps: DS.attr(),
  substep: DS.attr(),
  ressources: DS.attr('number')
});
