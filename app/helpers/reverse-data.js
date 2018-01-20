import Ember from 'ember';

export function reverseData(params/*, hash*/) {
  return params.reverse();
}

export default Ember.Helper.helper(reverseData);
