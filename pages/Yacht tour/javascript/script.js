jQuery(document).ready(function () {
    



    $('.navi>li, #menu_bg').mouseenter(function(){
        $('.submenu').stop().slideDown(300);
        $('#menu_bg').stop().slideDown(300);
    }).mouseleave(function(){
        $('.submenu').stop().slideUp(500);
        $('#menu_bg').stop().slideUp(500);
    });


    $('.navi>li').mouseenter(function(){

        let wid = $(this).children('a').width();
        let result = $(this).children('a').offset().left;
        $('.bar').css({
            'display':'block',
            'opacity':1,
            'width' : wid,
            'left' : result
        });


    })
    
    $('header').mouseleave(function(){

        $('.bar').css({
            'opacity':0,
            'left':'750px',
        })

    });

///////////////////////////////menu slide////////////////////////
    $('.imgslide').slick({
        'autoplay': true, //자동재생
        'autoplaySpeed': 4000, //재생속도(1초 = 1000)
        'fade': true, //fade모드
        'nextArrow': '.nxt', //다음버튼
        'prevArrow': '.prv', //이전버튼, 커스텀 컨트롤러
        'dots': true, //페이저버튼 사용설정
    });

    AOS.init();


///////////////////////////////img slide////////////////////////


    $('.timetitle').click(function(){
        $('.subtime').slideToggle();
        $('.timeCloseWrap').toggle();
    });

    $('.timeCloseWrap').click(function(){

        $('.subtime').slideUp();
        $('.timeCloseWrap').hide();

    })


    $('.time .subtime li').click(function(e){
        e.preventDefault();

        let txt = $(this).text();
        $('.timetitle').text(txt);
        $('.subtime').slideUp();
        $('.timeCloseWrap').hide();

    })

    ///////////////////////////////////////////////////////////
    $('.peopletitle').click(function(){
        $('.subpeople').slideToggle();
        $('.timeCloseWrap').toggle();
    });

    $('.timeCloseWrap').click(function(){

        $('.subpeople').slideUp();
        $('.timeCloseWrap').hide();

    })


    $('.people .subpeople li').click(function(e){
        e.preventDefault();

        let txt = $(this).text();
        $('.peopletitle').text(txt);
        $('.subpeople').slideUp();
        $('.timeCloseWrap').hide();

    });

    ////////////////////////////////////////////////
    $('input.datepicker').datepicker({
		dateFormat: 'yy-mm-dd',
		showButtonPanel: true,
		changeMonth: true,
		changeYear: true,
		defaultDate: +0,
		showAnim: "fold",
        minDate: 0,
        maxDate: 60
	});

    $('.datepicker.sample').datepicker({
		dateFormat: 'yy-mm-dd',
		showButtonPanel: true,
		changeMonth: true,
		changeYear: true,
		defaultDate: +0,
		showAnim: "fold"
	});
///////////////////////////////////////////



function changeBody(){

    let scr = $(window).scrollTop();
    let scrTarget = [$('.psyacht'), $('.pssd')];





        let offTop1 = $('.psyacht').offset().top - 600;
        let offTop2 = $('.pssd').offset().top - 600;


        let destination1 = $('.psyacht').next().offset().top - 600;
        let destination2 = offTop2 + $('.pssd').height();




        if((scr > offTop1 && scr <= destination1) || (scr>offTop2 && scr<=destination2) ){
            $('body').addClass('addColor');
        }else{
            $('body').removeClass('addColor');
        }




}


$(window).on('scroll',changeBody)


});//fin
