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
