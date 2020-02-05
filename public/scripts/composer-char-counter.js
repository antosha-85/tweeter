
$(document).ready(function() {
  let count = 140;
  $("textarea").on("input", function() {
    $('.counter').html(count - $(this).val().length);
    if ($(this).val().length >= 140) {
      $('.counter').removeClass('black').addClass("red");
    } else {
      $('.counter').removeClass('red').addClass("black");
    }
  });
});