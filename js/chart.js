$(document).ready(function() {
    $('#fullpage').fullpage({
      keyboardScrolling: false,
      anchors: ['page1', 'page2', 'page3', 'page4','page5'],
      resize : false,
      sectionsColor: ['#AACF52', '#4BBFC3', '#7BAABE', '#999999','#E5E5E5'],
      recordHistory: false,
      scrollingSpeed: 1000
    });
});

$(document).on('click', '#top', function(){
  $.fn.fullpage.moveTo('page1');
  setTimeout(function(){
        location.reload();
    },1000);

});
