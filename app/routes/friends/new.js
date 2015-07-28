import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('friend');
  },

  resetController(controller, isExiting) {
    if (isExiting) {
      var model = controller.get('model');
      model.rollback();
    }
  },

  actions: {
    save() {
      console.log('+- save action bubbled up to friends new route');

      return true;
    },
    cancel() {
      console.log('+- cancel action bubbled up to friends new route');

      return true;
    }
  }

});
