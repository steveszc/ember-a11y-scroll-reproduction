import Route from '@ember/routing/route';
import { Promise } from 'rsvp';

export default Route.extend({
  model() {
    let recordCount = (Math.random() * 50) + 50;
    let m = ['a', 'b', 'c'];
    for(let i = 0; i < recordCount; i++) { m.push(i) }

    return new Promise(resolve => setTimeout(resolve, 1000)).then(()=> m);
  },

  actions: {
    refresh() {
      this.refresh();
    }
  }
});
