import Route from '@ember/routing/route';
import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Route.extend(ApplicationRouteMixin, {
  model() {
    return this.get('store').findAll('truck');
  },
  actions: {
    logout() {
      this.get('session').invalidate();
    },
    create(name, type, id) {
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
    update(oldname, newname, type, id) {
      this.store.queryRecord('truck', {
        filter: {
          user: id,
          name: oldname
        }
      }).then(function (truck) {
        // do something with `tomster`
        truck.set('name', newname);
        truck.save();
      });
    },
    delete(name, type, id) {
      this.store.queryRecord('truck', {
        filter: {
          user: id,
          name: name
        }
      }).then(function (truck) {
        truck.destroyRecord(); // => DELETE to /posts/2
      });
    },
  }
});
