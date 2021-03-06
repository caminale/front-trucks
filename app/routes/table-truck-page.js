import Route from '@ember/routing/route';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  model() {
    return this.get('store').findAll('truck');
  },
  findtruck: Ember.inject.service('find-truck'),
  toast: Ember.inject.service(),
  actions: {
    logout() {
      this.get('session').invalidate();
    },
    createuser(name, type, id) {
      let toast = this.get('toast');
      let message = `Truck ${name} added`
      toast.info(message, 'Added');
      this.get('store').findRecord('user', id).then(user => {
        const truck = this.get('store').createRecord('truck', {
          name,
          user,
          delivering: false
        });
        truck.save().then((truck) => {
          user.get('trucks').push(truck.id);
          user.save();
        });
      });
    },
    async update(oldname, newname, type, id) {
      let toast = this.get('toast');
      let message = `Truck ${oldname} updated to ${newname}`
      toast.info(message, 'Updated');
      const truck = await  this.get('findtruck').gettruck( oldname, id );
      const truckParsed = JSON.parse(truck);
      this.get('store').findRecord('truck', truckParsed._id).then(function(truck) {
        // ...after the record has loaded
        truck.set('name', newname);
        truck.save();
      });
    },
    async delete(name, type, id) {
      let toast = this.get('toast');
      let message = `Truck ${name} deleted`
      toast.info(message, 'Deleted');
      const truck = await  this.get('findtruck').gettruck( name, id );
      const truckParsed = JSON.parse(truck);
      this.get('store').findRecord('truck',
                                    truckParsed._id,
                                    { backgroundReload: false })
        .then(function(truck) {
        truck.deleteRecord();
        truck.get('isDeleted');
        truck.save(); // => DELETE to /posts/1
      });
      this.get('store').findRecord('user', id).then(user => {

          user.set('trucks', user.get('trucks').filter(item => item !== truckParsed._id));
          user.save();
        });

    },
  }
});
