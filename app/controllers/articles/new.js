import Ember from 'ember';

export default Ember.Controller.extend({
  isValid: Ember.computed(
    'model.description',
    {
      get() {
        return !Ember.isEmpty(this.get('model.description'));
      }
    }
  ),

  actions: {
    save() {
      if (this.get('isValid')) {
        this.get('model').save().then((article) => {
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
