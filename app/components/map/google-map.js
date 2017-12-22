import Component from '@ember/component';

export default Component.extend({
  latitude: 48,
  longitude: 2.34,
  myZoom: 6,
  steps: '',
  lat: 0,
  lng: 0,
  index: 0,
  actions: {
    manageMarkers: function () {
      let index = 0;
     this.set('steps',this.get('subStep').content[0].__data.steps);
      const pos = [];
      let i = 0;
      this.get('steps').map((step) => {
        pos.push(step.start_location);

      });
      setInterval(() => {
        if (i < this.get('steps').length) {
          console.log(this.get('steps'))
          i++;
        }
        else {
          console.log('yolooo')
          if (index < this.get('subStep').content.length) {
            index++;
            this.set('steps', this.get('subStep').content[index].__data.steps)
            i = 0;
            this.get('steps').map((step) => {
              pos.push(step.start_location);

            });
          }
        }
        // console.log( pos[i].lat)
        this.set('lat', pos[i].lat);
        this.set('lng', pos[i].lng);
        this.set('index',index);
        console.log(this.get('lat')+'   '+this.get('lng')+ ' '+ this.get('index'))


      }, 1000);


    }
  }
});

