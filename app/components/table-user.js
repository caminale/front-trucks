import Component from '@ember/component';
import { Table } from 'ember-semantic-ui-table'
import Columns from '../mixins/columns';
import layout from '../templates/components/tables/table-user';
import Ember from 'ember';

export default Component.extend(Columns, {
  layout,
  table: Ember.computed('columns', 'model', function() {
    return new Table(this.get('columns'), this.get('model'));
  })
});
