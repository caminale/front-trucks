import Ember from 'ember';

export default Ember.Mixin.create({
  columns: Ember.computed(function() {
    return [
      {
        label: 'name',
        valuePath: 'name',
        verticalAlign: 'middle'
      },
      {
        label: 'Delivering',
        valuePath: 'delivering',
        verticalAlign: 'middle'
      }
    ];
  })
});
