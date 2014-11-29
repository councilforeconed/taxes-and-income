export default Ember.Component.extend({

  classNames: ['slider'],

  type: 'range',
  min: 0,
  max: 35,
  step: 5,
  value: 0,

  didInsertElement: function () {
    var self = this;

    this.$().slider({
      range: 'max',
      value: this.get('value'),
      min: this.get('min'),
      max: this.get('max'),
      step: this.get('step'),
      slide: function( event, ui ) {
        self.set('value', ui.value);
      }
    });
  },

  willDestroyElement: function () {
    this.$().slider('destroy');
  }

});
