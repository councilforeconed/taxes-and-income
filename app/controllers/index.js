import Round from 'appkit/models/round';

export default Ember.ArrayController.extend({

  _setup: function () {
    this._super();
    var self = this;

    this.setGraphSize = function () {
      var applicationWidth = $('#application').width() || 960;
      this.set('applicationWidth', applicationWidth);
    }.bind(this);

    $(window).bind('resize', function () {
      self.setGraphSize();
    });

    this.setGraphSize();
  }.on('init'),

  applicationWidth: 940,

  startingAmount: 1000,
  sliderMinimum: 0,
  sliderMaximum: 100,
  sliderValue: 80,

  marginalPropensityToConsume: function () {
    return this.get('sliderValue');
  }.property('sliderValue'),

  marginalPropensityToSave: function () {
    return this.get('sliderMaximum') - this.get('marginalPropensityToConsume');
  }.property('marginalPropensityToConsume'),

  dollarAmounts: function () {
    var divisor = this.get('sliderMaximum');
    var marginalPropensityToConsume = this.get('marginalPropensityToConsume');
    return this.get('content').map(function (round, index) {
      var amount = this.get('startingAmount');
      for (var i = 0; i < index; i++) {
        amount = amount * marginalPropensityToConsume / divisor;
      }
      return amount;
    }.bind(this));
  }.property('content.[]', 'startingAmount', 'marginalPropensityToConsume', 'sliderMinimum'),

  actions: {
    addRound: function () {
      var rounds = this.get('content');
      rounds.addObject(Round.create({ number: rounds.length }));
    }
  }
});
