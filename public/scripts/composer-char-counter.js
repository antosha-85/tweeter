
$(document).ready(function() {
  let count = 140;
  $("textarea").on("keypress", function() {
    $('.counter').html(count - $(this).val().length);
    if ($(this).val().length >= 140) {
      $('.counter').css("color", "red");
    } else {
      $('.counter').css("color", "black");
    }
  });
});