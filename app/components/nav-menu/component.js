import Ember from 'ember';

export default Ember.Component.extend({
	didRender(){
		// console.log(Ember.getOwner(this).lookup('controller:application').currentPath)
		// var fixmeTop = $('.info').offset().top;

		// if(Ember.getOwner(this).lookup('controller:application').currentPath === 'blog'){
		// 	console.log('dddd')
		// 	$('.info').css({
		// 		'position': 'fixed',
		// 		'top': '0',
		// 		'left': '0',
		// 		'min-height':'150px',
		// 		'height': '150px',
		// 		'overflow': 'hidden',
		// 		'padding-top':'45px'
		// 	});
		// }else{

		// 	$('.info').css({
		// 		'position': 'static',
		// 		'height': '100%',
		// 		'min-height':'300px',
		// 		'padding-top':'45px'



		// 	});

		// 	$(window).scroll(function() {
		// 		var currentScroll = $(window).scrollTop();
		// 		if (currentScroll >= fixmeTop) {
		// 		// $('.info-spacer').css({'height': '400px'})
		// 		$('.info').css({
		// 			'position': 'fixed',
		// 			'top': '0',
		// 			'left': '0',
		// 			'min-height':'150px',
		// 			'height': '150px',
		// 			'overflow': 'hidden',
		// 			'padding-top':'45px'

		// 		});
		// 	} else {
		// 		// $('.info-spacer').css({'height': '0'})

		// 		$('.info').css({
		// 			'position': 'static',
		// 			'height': '100%',
		// 			'min-height':'300px',
		// 			'padding-top':'0px'


		// 		});
		// 	}
		// });
	// }

}
});

