$(function() {
	//--选项卡
	$('.indexPart1').find('.tab').find('li').find('img:first').show();
	$('.indexPart1').find('.tab').find('li:first').find('img').hide();
	$('.indexPart1').find('.tab').find('li:first').find('img:last').show();
	$('.tabContentDiv').find('.tabContent:first').show();
	$('.tab').each(function(i) {
		$(this).find('li').each(function(ii) {
			$(this).click(function() {
				$('.tab').eq(i).find('li').removeClass('liNow');
				$(this).addClass('liNow');
				$('.tabContentDiv').eq(i).find('.tabContent').hide();
				$('.tabContentDiv').eq(i).find('.tabContent').eq(ii).show();
				$('.tab').eq(i).find('li').find('img').hide();
				$('.tab').eq(i).find('li').find('img:first').show();
				$(this).find('img').hide();
				$(this).find('img:last').show();
			});
		});
	});
	//--错层效果(复杂特效)
	$(window).scroll(function() {
		$('.headDiv').css('top', -$(window).scrollTop() / 2.5);
		$('.topImg').css('top', 100 - ($(window).scrollTop() / 1.5));
		if($(window).scrollTop() > 235) {
			$('.nav').css('top', 632 - $(window).scrollTop());
		} else {
			$('.nav').css('top', 593 - $(window).scrollTop() / 1.2);
		}
		
		$('.nav').stop();
		//$('.nav').css('opacity', (1000-$(window).scrollTop())*0.001)

		// var scrollTop = $(window).scrollTop();
		// $(".headDiv").css('transform','translate3d(0,' + scrollTop/1.5 + 'px,0)');
		// $('.topImg').css('transform','translate3d(0,' + (scrollTop/2.5) + 'px,0)');
		// $('.nav').css('transform','translate3d(0,' + (scrollTop/8) + 'px,0)');
		// $(".headDiv").css('-webkit-transform','translate3d(0,' + scrollTop/1.5 + 'px,0)');
		// $('.topImg').css('-webkit-transform','translate3d(0,' + (scrollTop/2.5) + 'px,0)');
		// $('.nav').css('-webkit-transform','translate3d(0,' + (scrollTop/8) + 'px,0)');

	});
	//--导航
	$('.nav').find('a').each(function(i) {
		$(this).click(function() {
			$('body,html').animate({
				scrollTop : $('.indexPart1').offset().top
			}, 500);
			$('.tab').find('li').removeClass('liNow');
			$('.tab').find('li').eq(i).addClass('liNow');
			$('.tabContentDiv').find('.tabContent').hide();
			$('.tabContentDiv').find('.tabContent').eq(i).show();
			$('.tab').find('li').find('img').hide();
			$('.tab').find('li').find('img:first').show();
			$('.tab').find('li').eq(i).find('img').hide();
			$('.tab').find('li').eq(i).find('img:last').show();
		});
	});
	//
});
