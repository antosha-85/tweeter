
$(document).ready(function () {
    let count = 140;
    $("textarea").on("keypress", function() {
        $('.counter').html(count - $(this).val().length);
        if ($(this).val().length >= 140) {
            $('.counter').css("color", "red");
        }
    })
    
    // $('#tweet_container').on('mouseover', '.tweet_article', function () {
    //     console.log('DFGNFD');
    //     $(this).find('.handle').toggleClass('hidden_span');
    //     $(this).toggleClass('tweet_article_shadow')
    // });
    
})