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
  incomeAmount: 0

});
