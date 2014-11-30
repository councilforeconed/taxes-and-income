/* global numeral */

export default Ember.Handlebars.makeBoundHelper(function(number) {
  if (isNaN(number)) return '0.00%';
  if (number.toString() === number) return number;
  return numeral(number).format('0.00%');
});
