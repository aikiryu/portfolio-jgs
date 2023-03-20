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
// this only changes the character css class accordingly to key input
document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 65: // a lowercase
    case 37: // left arrow
      $(".character_spreadsheet").addClass("character__moving-left");
      $(".character_spreadsheet").removeClass([
        "character__moving-down",
        "character__moving-right",
        "character__moving-up"
      ]);
      break;
    case 87: // w lowercase
    case 38: // up arrow
      $(".character_spreadsheet").addClass("character__moving-up");
      $(".character_spreadsheet").removeClass([
        "character__moving-down",
        "character__moving-right",
        "character__moving-left"
      ]);
      break;
    case 68: // d lowercase
    case 39: // right arrow
      $(".character_spreadsheet").addClass("character__moving-right");
      $(".character_spreadsheet").removeClass([
        "character__moving-down",
        "character__moving-uo",
        "character__moving-left"
      ]);
      break;
    case 83: // s lowercase
    case 40: // down arrow
      $(".character_spreadsheet").addClass("character__moving-down");
      $(".character_spreadsheet").removeClass([
        "character__moving-up",
        "character__moving-right",
        "character__moving-left"
      ]);
      break;
  }
};

});//fin