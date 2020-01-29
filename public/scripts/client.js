/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
    "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
    },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
}

function createTweetElement(obj) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date();
    const secondDate = new Date(obj.created_at);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

    const markup = `
    <section id="tweet_container">
        <article class="tweet_article">
            <header class="header_tweet">
                <div>
                    ${obj.user.name}
                </div>
            <div>
                <span id="handle" class="hidden_span">${obj.user.hadle}</span>
            </div>
            </header>
            <div class="body_tweet">
                <p>${obj.content.text}</p>
            </div>
            <footer class="footer_tweet">
                <div>
                    '${diffDays} days ago'
                </div>
                <div>
                Likes
                </div>
            </footer>
        </article>
    </section>
  `
  return markup
}
const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
