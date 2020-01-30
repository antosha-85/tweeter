jQuery(function($) {
    $('form').on('submit', postTweetToServer);
    getTweetsFromServer();
}) 


