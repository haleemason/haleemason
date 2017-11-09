import Ember from 'ember';

export default Ember.Controller.extend({
	toggleResume: true,
	init: function () {
		this._super();
		Ember.run.schedule("afterRender",this,function() {
		});
	},
});
