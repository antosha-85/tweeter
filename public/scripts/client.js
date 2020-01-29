/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
    {
        "user": {
            "name": "Newton",
            "avatars": "https://i.imgur.com/73hZDYK.png"
            ,
            "handle": "@SirIsaac"
        },
        "content": {
            "text": "If I have seen further it is by standing on the shoulders of giants"
        },
        "created_at": 1461116232227
    },
    {
        "user": {
            "name": "Descartes",
            "avatars": "https://i.imgur.com/nlhLi3I.png",
            "handle": "@rd"
        },
        "content": {
            "text": "Je pense , donc je suis"
        },
        "created_at": 1461113959088
    }
]
const calculateDaysAgo = dateFrom => {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const firstDate = new Date();
    const secondDate = new Date(dateFrom);
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
    return diffDays;
}

function createTweetElement(obj) {
    const markup = `
        <article class="tweet_article">
            <header class="header_tweet">
                <div>
                    ${obj.user.name}
                </div>
            <div>
                <span class="handle hidden_span">${obj.user.handle}</span>
            </div>
            </header>
            <div class="body_tweet">
                <p>${obj.content.text}</p>
            </div>
            <footer class="footer_tweet">
                <div>
                    ${calculateDaysAgo(obj.created_at)} days ago
                </div>
                <div>
                Likes
                </div>
            </footer>
        </article>
     `
    return markup
}

$(document).ready(function () {
    renderTweets(data);
});

function renderTweets(tweets) {
    for (const tweet of tweets) {
        const newElement = createTweetElement(tweet);
        $('#tweet_container').append(newElement)
    }
}