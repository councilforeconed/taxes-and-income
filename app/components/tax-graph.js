export default Ember.Component.extend({

  classNames: ['sixteen', 'columns'],

  income: 0,
  taxes: 0,
  yIntercept: -2,

  taxLineStartingPoint: function () {
    return 50 * (5 + -this.get('yIntercept'));
  }.property('yIntercept'),

  markerX: function () {
    return this.get('income') * 22;
  }.property('income', 'taxes'),

  markerY: function () {
    return 250 - (this.get('taxes') * 50);
  }.property('taxes'),

});
