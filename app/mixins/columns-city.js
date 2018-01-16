import Ember from 'ember';

export default Ember.Mixin.create({
  columns: Ember.computed(function() {
    return [
      {
        label: 'id',
        valuePath: 'id',
        verticalAlign: 'middle'
      },
      {
        label: 'Name',
        valuePath: 'name',
        verticalAlign: 'middle'
      },
      {
        label: 'Population',
        valuePath: 'population',
        verticalAlign: 'middle'
      },

    ];
  })
});
