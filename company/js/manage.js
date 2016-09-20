$(function (){
	var tag = new tags();
	tag.init({
		tagLi : $('.job-tags li'),
		tagContent : $('.job-content .acc-main'),
		current : 'on',
		reloadHash : {
			wxsz : 0,
			qyrz : 1,
			xgmm : 2
		}
	});

	$('.company-center .c-edit-btn').on('click',function(){
		var $layertit = $(this).data('layer-title');
		var $layerID = $(this).data('layer-id');
		
		var olayer = new layerFn($layertit,$layerID);
		olayer.init({
		});
	});
	
	$('.c-clause .reg-rule-btn').on('click',function(){
		var $layertit = $(this).data('layer-title');
		var $layerID = $(this).data('layer-id');
		
		var olayer = new layerFn($layertit,$layerID);
		olayer.init({
			closeBtn : '1',
			area : '545px',
			skin : 'layer-rule',
			move : false
		});
	})
});

