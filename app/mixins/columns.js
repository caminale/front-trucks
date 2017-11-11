import Ember from 'ember';

export default Ember.Mixin.create({
  columns: Ember.computed(function() {
    return [
      {
        cellType: 'row-number',
        verticalAlign: 'middle'
      },
      {
        label: 'First Name',
        valuePath: 'name',
        verticalAlign: 'middle'
      },
    ];
  })
});
