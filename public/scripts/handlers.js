const postTweetToServer = function(event) {
  event.preventDefault();
  //checking string length for emptiness
    if ($.trim($('textarea').val()).length === 0) {
      //sliding down first warning and sliding up the second if it was there
      $( ".alert1" ).slideDown( "2000" );
      $( ".alert2" ).slideUp( "2000" );
      return;
    }
    // after the problem resolved removing first warning
    $( ".alert1" ).slideUp( "2000" );
    //checking that length doesn't exceed
    if($.trim($('textarea').val()).length > 140 ) {
      //sliding down second warning and sliding up the first if it was there
      $( ".alert2" ).slideDown( "2000" );
      $( ".alert1" ).slideUp( "2000" );
      return;
    };
    // after the problem resolved removing second warning
    $( ".alert2" ).slideUp( "2000" );
    const data = $(this).serialize();
    console.log('data :', data);
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: data
    }).then(function (createdTweet) {
      //assigning new value 140 and empty string after we did post request
      let emptyStr = '';
      let newValue = 140;
      $('textarea').val(emptyStr);
      $('.counter').html(newValue)
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