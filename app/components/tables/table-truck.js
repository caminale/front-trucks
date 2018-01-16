import Ember from 'ember';
import Columns from '../../mixins/columns-truck';
import layout from '../../templates/components/tables/table-truck';
import { Table } from 'ember-semantic-ui-table';


export default Ember.Component.extend(Columns, {

  layout,
  table: Ember.computed('columns', 'model', function() {

    let trucks = this.get('model');
    let truckFalse = [];
    let truckTrue = [];
    trucks.forEach(truck => {
      if(truck.data.delivering === false) {
          truckFalse.push(truck);
      }
      else {
        truckTrue.push(truck);
      }
    });
    // let truckTrue = trucks.find(trucks => trucks.)
    if(this.get('delivering') === 2) {
      return new Table(this.get('columns'), truckFalse);
    }
    else if(this.get('delivering') === 1){
      return new Table(this.get('columns'), truckTrue);
    }
    else {
      return new Table(this.get('columns'), trucks);

    }



  })
});
