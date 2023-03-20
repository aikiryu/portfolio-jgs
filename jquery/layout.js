$(function()  {

	var current;
	var setLayout = function () {
		var winSctop = $(window).scrollTop();
		var totalHeight = 0;
		for (var z = 0; z < $(".page").length; z++) {
			totalHeight = totalHeight + $(".page").eq(z).outerHeight();
			// console.log(totalHeight)

			if (totalHeight > winSctop) {
				current = z;
				break;
			}
		}
		
		
			
			for (var i = 0; i < $(".page").length; i++) {
				$("header").removeClass("co" + i);
			}

			$("header").addClass("co" + current);
			$("header .header-inner > nav > .navlist > li").removeClass("on");
			$("header .header-inner > nav > .navlist > li").eq(current).addClass("on");
		
	}



	setLayout();

		
		
	$('.header-inner > nav > .navlist > li > a').click(function() { 
		var _this = $(this);
		var _thisPt = _this.parent();
		var _index = _thisPt.index();
		current = _index;
		var targetOffset = $(".page").eq(_index).offset().top;

		$('.header-inner > nav > .navlist > li').removeClass("on");
		_thisPt.addClass("on");
		$("html, body").animate({"scrollTop" : targetOffset});


		for (var i = 0; i < $(".page").length; i++) {
			$("header").removeClass("co" + i);
		}

		$("header").addClass("co" + current);
		$("header .header-inner > nav > .navlist > li").removeClass("on");
		$("header .header-inner > nav > .navlist > li").eq(current).addClass("on");

	})


	$(window).scroll(function() { 
		setLayout();
		console.log("current ===", current);
	})

})
