$(document).ready(function() {
    $('#fullpage').fullpage({
      keyboardScrolling: false,
      anchors: ['page1', 'page2', 'page3', 'page4','page5'],
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
  }).mouseout(function(){
    $('.chart-logo-lamp').css('display', 'none');
    $('.chart-logo').css('display', 'block');
  });

});


function fadein(){
  setTimeout(function(){
      $('.busho-cho').fadeIn(500);
      setTimeout(function(){
          $('.busho-cho-name').fadeIn(500);
        },500);
    },2000);
}
