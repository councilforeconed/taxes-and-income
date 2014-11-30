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

  sliderMinimum: 0,
  sliderMaximum: 35,
  incomeAmount: 0,
  yIntercept: -2,

  maximumIncome: Ember.computed.alias('sliderMaximum'),
  maximumTax: 5,

  range: function () {
    return this.get('maximumTax') - parseInt(this.get('yIntercept'), 10);
  }.property('maximumTax', 'yIntercept'),

  taxIncrement: function () {
    return this.get('range') / this.get('maximumIncome');
  }.property('range', 'maximumIncome'),

  taxesPaid: function () {
    var income = parseInt(this.get('incomeAmount'), 10);
    var yIntercept = parseInt(this.get('yIntercept'), 10);
    var taxes = this.get('taxIncrement') * income + yIntercept;
    return taxes > 0 ? taxes : 0;
  }.property('incomeAmount', 'yIntercept', 'maximumIncome', 'maximumTax'),

  averageTaxRatio: function () {
    return this.get('taxesPaid') / parseInt(this.get('incomeAmount'), 10);
  }.property('incomeAmount', 'taxesPaid')

});
