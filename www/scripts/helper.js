$(document).ready(function () {
    //autoSlider = setInterval(function () {
    //    changeSliderImage('.right-arrow');
    //}, 5000);

    //$('.slider.no-disabled .arrow').click(changeSliderImage);

    $('.company .tab').click(showCompanyInfo);
    $('.production .product').click(showProductInfo);
    $(window).load(function () {
        $('.flexslider').flexslider();
        setTimeout(function () {
            setInterval(function () {
                firstSlideTextAnimation();
                
            }, 500);
            setInterval(function () {
                thirdSlideTextAnimation();
            }, 5000);
            
        }, 1000);
        //setTimeout(function () {
        //    setInterval(function () {
        //        bgPositionAnimationTop();
        //    }, 4000);            
        //    setInterval(function () {
        //        bgPositionAnimationBottom();
        //    }, 4000);
        //},3000);
        
    });
    $('.contacts .link-button.mailto').click(function () { $(this).hide(); $('.register-form').slideDown(); });

    function bgPositionAnimationTop() {
        var secondSlide = $('.first-slide');
        $('.first-slide').animate({ top: '-200px', width: '1920px' }, 4000);
    }
    function bgPositionAnimationBottom() {
        var secondSlide = $('.second-slide');
        $('.first-slide').animate({ top: '0', width: '2400px' }, 4000);
    }
    function firstSlideTextAnimation() {
        var secondSlide = $('.first-slide');
        var first = $('.first-slide .first');
        var second = $('.first-slide .second');
        var third = $('.first-slide .third');
        first.fadeIn(1500, function () {
            //first.hide();
            second.fadeIn(1500, function () {
                third.fadeIn(2000, function () {
                    first.fadeOut();
                    second.fadeOut();
                    third.fadeOut();
                });
                //second.hide();
            });
        });
    }
    function thirdSlideTextAnimation() {
        var first = $('.third-slide .first');
        var button = $('.third-slide .reg-button');
        first.fadeIn(1000, function () {
            button.show()
            setTimeout(function () {
                first.fadeOut();
                button.fadeOut();
            }, 4500);
        });
    }
    
});



var autoSlider;
var currentImg = 1;

function changeSliderImage(event) {

    var arrow;
    var sliderContaner = $('.slider-images');
    var currentPosition = 0;

    currentImg++;

    if (event != '.right-arrow') {
        arrow = $(event.target);
        clearInterval(autoSlider);
    } else {
        arrow = $(event);
    }

    if (currentImg == 5) {
        currentImg = 1;
        sliderContaner.css("left", "0");
    }

    if (arrow.hasClass('left-arrow')) {
        if (currentImg == 1) {
            currentImg = 5;
            sliderContaner.css("left", "-3848px");
        }
        currentPosition = currentImg * -962 + 1924;
        currentImg--;
        currentImg--;
    } else {
        currentPosition = currentImg * -962;
    }

    $('.slider').removeClass('no-disabled');
    sliderContaner.animate({
        left: currentPosition + 'px'
    }, 1000, function () {
        $('.slider').addClass('no-disabled');
    });
}


/********************Logic for page******************/
function showProductInfo(event) {
    var product = $(event.target);
    if (!product.hasClass('product')) {
        product = product.parent()
    }
    var productClass = product.attr('class').split(' ', 1);
    $(".product-info." + productClass).show().siblings('.product-info').hide();
    product.addClass('selected').siblings().removeClass('selected');
}

function showCompanyInfo(event) {
    var tab = $(event.target);
    if (!tab.hasClass('tab')) {
        tab = tab.parent()
    }
    var tabClass = tab.attr('class').split(' ', 1);
    $(".company-info." + tabClass).show().siblings('.company-info').hide();
    tab.addClass('selected').siblings().removeClass('selected');
}

