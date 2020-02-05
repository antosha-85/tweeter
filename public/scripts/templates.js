// old function decided to leave for reference and future use

// const calculateDaysAgo = dateFrom => {
//   const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
//   const firstDate = new Date();
//   const secondDate = new Date(dateFrom);
//   const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
//   return diffDays;
// };


//used the code from https://codepen.io/cferdinandi/pen/Vwwbpyr and added minutes functionality and added (s) at the end plus modified the code to get a singular minute
var timeFromNow = function (time) {

	// Get timestamps
	var unixTime = new Date(time).getTime();
  console.log("TCL: timeFromNow -> unixTime", unixTime)
	if (!unixTime) return;
	var now = new Date().getTime();

	// Calculate difference
	var difference = (unixTime / 1000) - (now / 1000);

	// Setup return object
	var tfn = {};

	// Check if time is in the past, present, or future
	tfn.when = 'now';
	if (difference > 0) {
		tfn.when = 'future';
	} else if (difference < -1) {
		tfn.when = 'past';
	}

	// Convert difference to absolute
	difference = Math.abs(difference);

	// Calculate time unit
	if (difference / (60 * 60 * 24 * 365) > 1) {
		// Years
		tfn.unitOfTime = 'year(s)';
		tfn.time = Math.floor(difference / (60 * 60 * 24 * 365));
	} else if (difference / (60 * 60 * 24 * 45) > 1) {
		// Months
		tfn.unitOfTime = 'month(s)';
		tfn.time = Math.floor(difference / (60 * 60 * 24 * 45));
	} else if (difference / (60 * 60 * 24) > 1) {
		// Days
		tfn.unitOfTime = 'day(s)';
		tfn.time = Math.floor(difference / (60 * 60 * 24));
	} else if (difference / (60 * 60) > 1) {
		// Hours
		tfn.unitOfTime = 'hour(s)';
		tfn.time = Math.floor(difference / (60 * 60));
  } else if (difference / 60 > 1) {
    //Minutes
    if(Math.floor(difference/60) === 1) {
      tfn.unitOfTime = 'minute';
    } else {
      tfn.unitOfTime = 'minute(s)';
    }
    tfn.time = Math.floor(difference/60);
  }  else {
		// Seconds
		tfn.unitOfTime = 'second(s)';
		tfn.time = Math.floor(difference);
	}
  console.dir(tfn);
	// Return time from now data
	return `${tfn.time} ${tfn.unitOfTime} ago`;
};

const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

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
                <div class='timeAgo'>
                    ${escape(timeFromNow(obj.created_at))} 
                </div>
                <div class='icons handle'>
                    <i class="fab fa-font-awesome-flag"></i>
                    <i class="fas fa-retweet"></i>
                    <i class="fas fa-heart"></i>
                </div>
            </footer>
        </article>
     `;
  return markup;
}

const renderTweets = function(tweets) {
  const $tweetContainer = $('#tweet_container');
  $tweetContainer.empty();
  for (const tweet of tweets) {
    const newElement = createTweetElement(tweet);
    $('#tweet_container').prepend(newElement);
  }
};