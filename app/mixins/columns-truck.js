import Ember from 'ember';

export default Ember.Mixin.create({
  columns: Ember.computed(function() {
    return [
      {
        cellType: 'row-number',
        verticalAlign: 'middle'
      },
      {
        label: 'id',
        valuePath: 'id',
        verticalAlign: 'middle'
      },
      {
        label: 'User',
        valuePath: 'user',
        verticalAlign: 'middle'
      },
      {
        label: 'Delivering',
        valuePath: 'delivering',
        verticalAlign: 'middle'
      },
    ];
  })
});
