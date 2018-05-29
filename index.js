var ScoreMark = function(ele, opt){
	this.$element = $(ele);
	this.option = opt;
	this.initImg();
}

ScoreMark.prototype = {

	initImg: function(){
		var bHtml = init(this.option.count, this.option.beforImg);
		var aHtml = init(this.option.level, this.option.afterImg);
		var html = '<div class="beforImg">' + bHtml + '</div><div class="afterImg">' + aHtml + '</div>'
		this.$element.append(html);
		this.decimalImg();
		this.initClick();
	},

	initClick: function(){
		var _self = this;
		_self.$element.find('.star-img').on('click',function(e){
			var imgWidth = e.pageX - $(this).offset().left;
			var count = $(this).index();
			_self.option.level = _self.option.isDecimal ? (count + imgWidth/30).toFixed(1) : ( count + 1 == _self.option.level ? count  : count + 1)
			console.log(_self.option.level)
			_self.$element.empty();
			_self.initImg()
			
		})
	},

	decimalImg: function(){
		var decimal = this.option.level - parseInt(this.option.level);
		if(decimal && this.option.isDecimal){
			this.$element.find('.afterImg>div').last().css({
				width: decimal * 30 + 'px',
				overflow: 'hidden'
			})
		}
	}
}



var init = function(level, img){
	var imgs = ''
	for(var i=0;i<Math.ceil(level);i++){
		imgs += '<div class="star-img"><img src= ' + img + '></div>'
	}
	return imgs;
}