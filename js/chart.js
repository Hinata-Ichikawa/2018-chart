$(document).ready(function() {
    $('#fullpage').fullpage({
      keyboardScrolling: false,
      recordHistory: false,
      sectionsColor: ['#AACF52', '#4BBFC3', '#7BAABE', '#E5E5E5']
    });
});

$(document).on('click', '#down', function(){
  console.log("section");
  $.fn.fullpage.moveSectionDown();
});

$(document).on('click', '#last', function(){
  console.log("section");
  $.fn.fullpage.moveSectionDown();
});
