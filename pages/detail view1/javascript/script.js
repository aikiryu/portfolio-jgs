jQuery(document).ready(function () {
    $('.slider').slick({
        'autoplay': true, //자동재생
        'autoplaySpeed': 2000, //재생속도(1초 = 1000)
        'fade': true, //fade모드
        'nextArrow': '.nxt', //다음버튼
        'prevArrow': '.prv', //이전버튼, 커스텀 컨트롤러
        'dots': true, //페이저버튼 사용설정
    });
/////////////////////뉴스캐러셀///////////////////////////


$('.header-inner .menu').click(function(){
  $('.menuwrap').stop().animate({
    'top':0
  })
});
$('.btn').click(function(){
  $('.menuwrap').stop().animate({
    'top':'-600px'
  })
});


////////////////////////메뉴슬라이드/////////////////////


$('.cardlist a').click(function(e){
  e.preventDefault();
})

/*global $, console*/
var slider = document.querySelector('.items'),
    arrows = document.querySelectorAll('.wrapper-slider .arrow-left, .wrapper-slider .arrow-right'),
    isDown = false,
    startX,
    scrollLeft;

slider.scrollLeft =0;

slider.onmousedown = function (e) {
    'use strict';
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
};

slider.onmouseup = function () {
    'use strict';
    isDown = false;
    slider.classList.remove('active');
};

slider.onmouseleave = function () {
    'use strict';
    isDown = false;
    slider.classList.remove('active');
};

slider.onmousemove = function (e) {
    'use strict';
    if (!isDown) { return; }
    e.preventDefault();
    var x = e.pageX - slider.offsetLeft,
        walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
};

function controlsSlider(num) {
    'use strict';
    var smooth = setInterval(function () {
        slider.scrollLeft += num;
    }, 10);
    setTimeout(function () {
        clearInterval(smooth);
    }, 210);
}
arrows[0].onclick = function () {
    'use strict';
    controlsSlider(-10);
};

arrows[1].onclick = function () {
    'use strict';
    controlsSlider(10);
};

window.onkeydown = function (e) {
    'use strict';
    var key = e.keyCode;
    if (key === 39) {
        controlsSlider(10);
    }
    if (key === 37) {
        controlsSlider(-10);
    }
};






/////////////////////////////////////////////////////////
});//fin