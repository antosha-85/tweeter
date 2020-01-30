const postTweetToServer = function(event) {
  event.preventDefault();
    if ($.trim($('textarea').val()).length === 0) {
      console.log('hello world!')
      $( ".alert1" ).slideDown( "2000" );
      $( ".alert2" ).slideUp( "2000" );
      return;
    }
    $( ".alert1" ).slideUp( "2000" );
    if($.trim($('textarea').val()).length > 140 ) {
      $( ".alert2" ).slideDown( "2000" );
      $( ".alert1" ).slideUp( "2000" );
      return;
    };
    $( ".alert2" ).slideUp( "2000" );
    const data = $(this).serialize();
    console.log('data :', data);
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: data
    }).then(function (createdTweet) {
      console.log('RESPONSE', createdTweet)
      getTweetsFromServer();
    });
}

const getTweetsFromServer = function () {
    $.ajax({
        url: '/tweets',
        method: 'GET'
    }).then(function (tweets) {
        renderTweets(tweets)
    });
}