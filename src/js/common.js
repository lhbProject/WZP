var commonJS = {
	publicHtml : function (){
		// 加载头部底部
		var header = template('header'),footer = template('footer');
		$('.header').html(header);
		$('.footer').html(footer);
	},
	preventImg : function (){
		// 阻止拖拽默认事件
		$('img').mousedown(function(e) {
			e.preventDefault();
		});
	},
	innerBg : function (){
		// 加载内页背景图片
		var len = 11
		var arrHtml = []
		for (var i = 1; i <= len; i++){
			arrHtml.push('<span class="cbg-icon'+i+'"></span>')
		}
		$('.bg-icon').append(arrHtml.join(''))
	},
	selectAll : function (checkboxClass){
		// 全选框
		$(document).on('change','.all-checkbox',function(){
			var $this = $(this);
			$this.prop('checked') ? $('.'+checkboxClass+'').prop('checked',true) : $('.'+checkboxClass+'').prop('checked',false)
		});
		// 取消全选
		$(document).on('change','.'+checkboxClass+'',function(){
			var resule = $('.'+checkboxClass+'').filter('.'+checkboxClass+':not(:checked)').length > 0;
			resule ? $('.all-checkbox').prop('checked',false):$('.all-checkbox').prop('checked',true);
		})
	},
	mouseAnimate : function (){
		$(document).on('mousemove',function(e){
			$('.bg-icon span').each(function(index, el) {
				var el = $(el),
					x = e.pageX,
					y = e.pageY,
					t = el.offset().top,
					l = el.offset().left,
					c = Math.random()*40+20,
					disX = Math.round((x-l)/c),
					disY = Math.round((y-t)/c);
			});
		});
	}
};

// 标签切换
function tags(obj){
	// 初始变量
	this.defaults = {
		tagLi : $('.tags li'),
		tagContent : $('.tags-content'),
		index : 0,
		current : 'active',
		reloadHash : {}
	}
}

tags.prototype.init = function(obj){
	var opt = $.extend({},this.defaults,obj);
	var hash = location.hash.substring(1);
	var ind = opt.reloadHash[hash] || opt.index;
	opt.tagContent.eq(ind).show();
	opt.tagLi.eq(ind).addClass(opt.current)

	opt.tagLi.click(function() {
		var i = $(this).index();
		location.hash = $(this).find('a').data('hashval');
		$(this).addClass(opt.current).siblings().removeClass(opt.current);
		opt.tagContent.eq(i).show().siblings().hide();
	});

};

// 标签切换

// 弹窗
function layerFn(tit,id){
	this.tit = tit;
	this.id = id;
	this.defaults = {
		type : 1,
    	title : this.tit,
    	skin : 'job-layer',
    	shadeClose : false,
    	closeBtn : '2',
    	area : '545px',
    	content: $('#'+this.id+'')
	}
}
layerFn.prototype.init = function (options){
	var settings = $.extend(this.defaults,options);
	return layer.open(settings);
}

// 弹窗

$(function(){
	commonJS.publicHtml();
	commonJS.preventImg();
})
	


