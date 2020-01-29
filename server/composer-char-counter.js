$(document).ready(function () {
    let count = 140;
    $("textarea").on("keypress", function() {
        $('.counter').html(count - $(this).val().length);
        if ($(this).val().length >= 140) {
            $('.counter').css("color", "red");
        }
    })
    
    $('#tweet_container').hover (function () {
        $('#handle').toggle();
        $('#tweet_container').toggleClass('tweak_container_shadow')
    });
    
})