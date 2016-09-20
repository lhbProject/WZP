$(function(){
	commonJS.selectAll('j-checkbox');
	$('.j-add-nature input:radio').click(function(event) {
		$(this).parents('li').addClass('active').siblings('li').removeClass('active')
	});

	$('.job-list-wrap').on('click','.j-more-btn',function(e){
		$(this).siblings('.j-more-sub').toggle().parents('tr').siblings('tr').find('.j-more-sub').hide();
		e.stopPropagation();
	}).on('click','.j-more-sub',function(e){
		e.stopPropagation();	
	})


	$(document).click(function() {
		$('.job-list-wrap .j-more-sub').hide();
	});

})