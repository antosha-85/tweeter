const calculateDaysAgo = dateFrom => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date();
    const secondDate = new Date(dateFrom);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
}

const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

function createTweetElement(obj) {
    const markup = `
        <article class="tweet_article">
            <header class="header_tweet">
                <div class='leftHeader'>
                    <img src=${escape(obj.user.avatars)}>
                    <div>${escape(obj.user.name)}</div>
                </div>
            <div>
                <span class="handle hidden_span">${escape(obj.user.handle)}</span>
            </div>
            </header>
            <div class="body_tweet">
                <p>${escape(obj.content.text)}</p>
            </div>
            <footer class="footer_tweet">
                <div>
                    ${escape(calculateDaysAgo(obj.created_at))} days ago
                </div>
                <div>
                Likes
                </div>
            </footer>
        </article>
     `
    return markup
}

const renderTweets = function (tweets) {
    const $tweetContainer = $('#tweet_container');
    $tweetContainer.empty();
    for (const tweet of tweets) {
        const newElement = createTweetElement(tweet);
        $('#tweet_container').prepend(newElement)
    }
}