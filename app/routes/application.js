import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this.transitionTo('child');
  },
  setupController(controller) {
    controller.set('useFocusingOutlet')
  },
  actions: {
    toggleFocusingOutlet() {
      this.controller.set('useFocusingOutlet', !this.controller.get('useFocusingOutlet'));
    }
  }
});
