$(document).ready(function() {
    $('#fullpage').fullpage({
      // keyboardScrolling: false,
      anchors: ['page1', 'page2', 'page3', 'page4'],
      resize : false,
      sectionsColor: ['#AACF52', '#4BBFC3', '#7BAABE', '#E5E5E5']
    });
});

$(document).on('click', '#down', function(){
  $.fn.fullpage.moveSectionDown();
});
