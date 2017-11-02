import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  session: Ember.inject.service('session'),

  actions: {
    register(name, password) {
      const user = this.get('store').createRecord('user', {name:name, password:password});
// we make an request to server to know if the user exist
      const request = $.ajax({
        url:' http://localhost:8080/availableUser',
        type:'POST',
        data: {name: name, password: password}
      });
      request.then(function(results){
        console.log(results);
//if it doesn't exist we can creat it
        if(results.result ==='okUserNotExisting'){
          user.save();
        }
      });
    },

  }
});
