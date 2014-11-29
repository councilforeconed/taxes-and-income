export default Ember.Handlebars.makeBoundHelper(function(number) {
  if (number.toString() === number) return number;
  return numeral(number / 100).format('0.00');
});
