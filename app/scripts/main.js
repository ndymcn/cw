/* jshint devel:true */

'use strict';

console.log('\'Allo \'Allo!');

var l = function(msg){
	console.log(msg);
}


var cw = {
	$d : $(document),
	$w : $(window),
	$b : $('body')
}


cw.switchHead = function(){

	var leftMenu = $('header div.new ul > *');
	// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		if(cw.$w.width() < 900) {

			$('header .logo').after($('header .new'));
			l(leftMenu);

		} else {

			$('header .logo').before($('header .new'));
		}
	// }
};
	

cw.$d.ready(function(){

	cw.switchHead();

});

cw.$w.on('resize', function(){

	cw.switchHead();

});

// slick slider

$(document).ready(function() {
    $('.responsive').slick({
        // dots: true,
        infinite: true,
        autoplay: true,
        speed: 600,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

var feed = new Instafeed({
    get: 'user',
    accessToken: '2155260124.1677ed0.01272515dff248a5b3c72349f2e2d5ea',
    userId: 2155260124,
    clientId: 'YOUR_CLIENT_ID',
    resolution: 'standard_resolution',
    template: '<div class="third"><a href="{{link}}" target="_blank"><img src="{{image}}" /><p>{{caption}}</p></a></div>'
});
feed.run();

