export default Ember.View.extend({
  _setup: function () {
    this.controller.setGraphSize();
  }.on('didInsertElement', 'becameVisible')
});