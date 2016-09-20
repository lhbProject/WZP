$(function(){
	var index,index1,index2;
	$('.send-resume-btn').on('click',function(){
		var $layertit = $(this).data('layer-title');
		var $layerID = $(this).data('layer-id');
	    var olayer = new layerFn($layertit,$layerID);
		index = olayer.init({
		});
	});

	$('.r-intextion-main .view-next-btn').on('click',function(){
		var $layertit = $(this).data('layer-title');
		var $layerID = $(this).data('layer-id');
		layer.close(index);
 		var olayer = new layerFn($layertit,$layerID);
		index1 = olayer.init({
			
		});
	});
	
	$('.r-intextion-main .view-sure-btn').on('click',function(){
		var $layertit = $(this).data('layer-title');
		var $layerID = $(this).data('layer-id');
		layer.close(index1);
 		var olayer = new layerFn($layertit,$layerID);
		olayer.init({
			success : function(layer,index){
				var i = 10,
					time = null;
				time = setInterval(function(){
					if (i>0){
						i--;
						$('.r-intextion-suc .return-job-list').find('.sec').text(i);
					}
					else{
						clearInterval(time);
						location.href='resume_list.html';
					}
				},1000)
			}
		});
	})
})