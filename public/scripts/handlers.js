const postTweetToServer = function(event) {
  event.preventDefault();
    if ($('textarea').val() === '') {
      alert('This field cannot be empty!')
      return;
    }
    if($('textarea').val().length > 140 ) {
      alert('You exceeded the number of characters!');
      return;
    };
    const data = $(this).serialize()
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