$(document).ready(function() {
    $('#fullpage').fullpage({
      keyboardScrolling: false,
      anchors: ['page1', 'page2', 'page3', 'page4','page5','page6'],
      resize : false,
      recordHistory: false,
      scrollingSpeed: 1000,
    });
});

$(document).on('click', '#top', function(){
  $.fn.fullpage.moveTo('page1');
  setTimeout(function(){
        location.reload();
    },1000);

});

$(function(){
  $('.start-button').mouseover(function(){
    $('.chart-logo').css('display', 'none');
    $('.chart-logo-lamp').css('display', 'block');
    $('.light').css('display', 'block');
    $('.shadow-img').css('visibility', 'visible');
  }).mouseout(function(){
    $('.chart-logo-lamp').css('display', 'none');
    $('.chart-logo').css('display', 'block');
    $('.light').css('display', 'none');
    $('.shadow-img').css('visibility', 'hidden');
  });

});


var ua = navigator.userAgent;
var iphone = ua.indexOf('iPhone') > 0;
var androidSp = ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0;
var ipad = ua.indexOf('iPad');
var androidT = ua.indexOf('Android');

if( iphone || androidSp ){

  $(window).on("orientationchange", function() {
    /* 向き切り替え時の処理 */

    if (window.innerHeight < window.innerWidth) {
        document.location.href = "http://geikousai-ncu.com/2018/pre";
   }
  });

}else if( ipad || androidT ) {

}

history.pushState(null, null, null);
$(window).on("popstate", function (event) {
    if (!event.originalEvent.state) {
        history.pushState(null, null, null);
        return;
    }
});
