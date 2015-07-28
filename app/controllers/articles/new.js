import Ember from 'ember';

export default Ember.Controller.extend({
  hasDescription: Ember.computed.notEmpty('model.description'),
  isValid: Ember.computed.and(
    'hasDescription'
  ),

  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then(() => {
          this.transitionToRoute('articles');
        });
      } else {
        this.set('errorMessage', 'You have to fill in the description');
      }
      return false;
    },

    cancel() {
      return true;
    }
  }
});
