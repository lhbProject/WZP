$(function (){
	indexAnimate();
	
	$(window).scroll(function(){
		indexAnimate()
	});
});

function indexAnimate(){
	var t = 300,
		windowHeight = $(window).height(),
		windowTop = windowHeight*0.75+$(window).scrollTop(),
		indexAnimateWrap = $('.index-animate-wrap'),
		$text1 = indexAnimateWrap.find('.index-text1'),
		$text2 = indexAnimateWrap.find('.index-text2'),
		$text3 = indexAnimateWrap.find('.index-text3'),
		$pic1 = indexAnimateWrap.find('.index-pic1'),
		$pic2 = indexAnimateWrap.find('.index-pic2'),
		$pic3 = indexAnimateWrap.find('.index-pic3'),
		$indexCase = $('.index-case'),
		$pic2Top = $pic2.offset().top,
		$pic3Top = $pic3.offset().top,
		$indexCaseTop = $indexCase.offset().top;
		
//		console.log($indexCase.offset().top+','+windowTop);
		
	$text1.animate({'left':'83px','opacity':'1'},'slow');
	setTimeout(function(){
		$pic1.animate({'top':'209px','opacity':'1'},'slow');
	},t)
	
	
	if($pic2Top<windowHeight){
		$text2.animate({'right':'127px','opacity':'1'},'slow');
		setTimeout(function(){
			$pic2.animate({'top':'880px','opacity':'1'},'slow');
		},t);
	}
	else if($pic2Top<windowTop){
		$text2.animate({'right':'127px','opacity':'1'},'slow');
		setTimeout(function(){
			$pic2.animate({'top':'880px','opacity':'1'},'slow');
		},t);
	};
	
	if($pic3Top<windowTop){
		$text3.animate({'left':'85px','opacity':'1'},'slow');
		setTimeout(function(){
			$pic3.animate({'top':'1616px','opacity':'1'},'slow');
		},t);
	};
	if($indexCaseTop<windowTop){
		$indexCase.show().animate({'top':'2310px','opacity':'1'},'slow')
	}
	
}
