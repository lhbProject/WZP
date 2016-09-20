$(function(){
	commonJS.innerBg();
	commonJS.mouseAnimate();
	$('.company-login-wrap .c-l-tags li').click(function(){
		$(this).addClass('active').siblings('li').removeClass('active')
	});
});








