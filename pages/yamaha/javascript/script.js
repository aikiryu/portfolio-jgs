jQuery(document).ready(function () {



    let winWidth = window.innerWidth;


    function mobile(){
        $('.navBtn').click(function () {
            $('aside').css({ 'right': 0 });
        });
    
        $('.close').click(function () {
            $('aside').css({ 'right': '-70%' });
        });
    
        //어사이드 오픈클로즈
    
        $('.mainmenu>li').click(function () {
            $(this).find('.submenu').stop().slideToggle(500);
        });
    
        //어사이드 메뉴 슬라이드업다운
        $('.mainmenu>li:nth-child(2)').click(function(){
            $('.mainmenu>li:nth-child(2)>.submenu').css({ 'display' : 'flex'});
        });

        //어사이드 메뉴2번 flex
    }//mobile js넣는곳

    function pc(){
        $('.top').mouseenter(function () {
            $('.pcmenu').css({ 'color': '#333' });
            $('.logo a:nth-child(2) img').css({ 'display': 'block' });
            $('.pcNavimo').css({ 'display': 'flex' });
        }).mouseleave(function () {
            $('.pcmenu').css({ 'color': '#fff' });
            $('.logo a:nth-child(2) img').css({ 'display': 'none' });
            $('.pcNavimo').css({ 'display': 'none' });
        });
        //////////////////헤더마우스오버/////////////////////
        $('.pcmenu>li:not(:nth-child(3)), .subs>div').mouseover(function () {
            let i = $(this).index();
            $('.subs>div').eq(i).stop().slideDown(500);
        }).mouseout(function () {
            $('.subs>div').stop().slideUp(500);
        });
    
        /////////////////pcsubmenu 슬라이드다운////////////////////////

    }//pc js 넣는 곳
    function common(){
        $('.conbox .box').click(function (e) {
            e.preventDefault();
        let i = $(this).index();
        
        $('.product').eq(i).show().siblings().hide();
        $('.product').eq(i).find('.cardlist').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: null,
            nextArrow: null,
            setPosition:0,
            variableWidth : true,
            dots:true,
          });
        });

        $('.conbox .box a').click(function(){
            $(this).parent().addClass("active").siblings().removeClass("active");
        })

        //////////////////슬릭슬라이더//////////

        $('.pllist>li>a').click(function () {
            $(this).parent().addClass("active").siblings().removeClass("active");
            return false;
        });
      
        $('.pllist li a').click(function() {
            $('.artistset').css('display', 'flex');
            $('.artistset').hide();
            var index = $(this).parent().index();
            $('.artistset.ar' + (index + 1)).show();
          });
          
        //////////////////플레이리스트///////////////////////

          $('.product').eq(0).find('.cardlist').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: null,
            nextArrow: null,
            setPosition:0,
            variableWidth : true,
            dots:true,
          }); 

        //////////////////////////////////////////////////
    }//일반 js 넣는곳

//////////////////////////////////////////////////////

////실행구간은 어지간해선 손대지말고!!!///////

function init(){


    

if(winWidth < 741){


    mobile();

}else{

    pc();

}
common();


};

init();


    
var delay = 300;
var timer = null; 
$(window).resize(function(){

    let rszWin = window.innerWidth;


    if(rszWin < 741){
        
        mobile();

    }else{
        pc();

    }

        clearTimeout(timer);
        timer = setTimeout(function(){
        document.location.reload();
        }, delay);


});




////////////////////////////////////////////////////////






});