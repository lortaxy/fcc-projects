/* JAVASCRIPT CODE
const text = document.getElementById('text');
const author = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');
const tweetButton = document.getElementById('tweet-quote');

let colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const getQuote = async () => {
  try {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': 'lJNM/yGe0QLsSOpwM0tgwA==66FXNTpsFkSvEpLf'

      }
    });
    
    const data = await response.json();
    console.log(data);

    text.textContent = `${data[0].quote}`;
    author.textContent = `${data[0].author}`;
    
    updateTweetLink();

    const color = Math.floor(Math.random() * colors.length);
    document.body.style.transition = "background-color 1s, color 1s"; // Smooth transition
    document.body.style.backgroundColor = colors[color];
    document.body.style.color = colors[color];
    
    newQuoteBtn.style.transition = "background-color 1s";
    newQuoteBtn.style.backgroundColor = colors[color];
    tweetButton.style.transition = "background-color 1s";
    tweetButton.style.backgroundColor = colors[color];

    text.style.animation = '';
    author.style.animation = '';

    void text.offsetWidth;  // Trigger reflow for the text element
    void author.offsetWidth; // Trigger reflow for the author element

    
    text.style.animation = 'fadeIn 1s'
    author.style.animation = 'fadeIn 1s'
    
    
  } catch (err) {
    text.textContent = 'ERROR';
    author.textContent = 'ERROR';
    console.error(err);
  }
}

function updateTweetLink() {
  const quote = text.textContent;
  const authorName = author.textContent;
  const tweet = `"${quote}" ${authorName}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;

  tweetButton.href = tweetUrl;
}

newQuoteBtn.addEventListener('click', () => {
  getQuote();
  updateTweetLink();
})

window.addEventListener('DOMContentLoaded', getQuote);
*/

// JQUERY CODE 

const colors = [
  '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c',
  '#9b59b6', '#FB6964', '#342224', '#472E32',
  '#BDBB99', '#77B1A9', '#73A857'
];

const getQuote = async () => {
  try {
    const response = await fetch('https://api.api-ninjas.com/v1/quotes', {
      headers: {
        'X-Api-Key': 'lJNM/yGe0QLsSOpwM0tgwA==66FXNTpsFkSvEpLf'
      }
    });

    const data = await response.json();
    console.log(data);

    const quote = data[0].quote;
    const authorName = data[0].author;
    updateTweetLink(quote, authorName);

    // Random color from array
    const color = Math.floor(Math.random() * colors.length)

    // Animate body and button colors
    $('html body').animate(
      {
        backgroundColor: colors[color],
        color: colors[color]
      },
      1000
    );

    $('.button').animate(
      {
        backgroundColor: colors[color]
      },
      1000
    );

    $('#text').animate({opacity: 0}, 500, function() {
      $(this).animate({opacity: 1}, 500);
      $('#text').text(quote)
    })

    $('#author').animate({opacity: 0}, 500, function () {
      $(this).animate({opacity: 1}, 500);
      $('#author').text(authorName)
    })

  } catch (err) {
    $('#text').text('ERROR');
    $('#author').text('ERROR');
    console.error(err);
  }
};

function updateTweetLink(quote, authorName) {
  const tweet = `"${quote}" ${authorName}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  $('#tweet-quote').attr('href', tweetUrl);
}

// On page load and button click
$(document).ready(function () {
  getQuote();
  $('#new-quote').on('click', getQuote);
});


/*
    // Random color from array
    const color = colors[Math.floor(Math.random() * colors.length)];

    // Animate body and button colors
    $('body').css({
      'transition': 'background-color 1s, color 1s',
      'background-color': color,
      'color': color
    });

    $('#new-quote, #tweet-quote').css({
      'transition': 'background-color 1s',
      'background-color': color
    });

    // Restart animations
    $('#text, #author').css('animation', 'none');
    void $('#text')[0].offsetWidth;  // Force reflow
    void $('#author')[0].offsetWidth;

    $('#text').css('animation', 'fadeIn 1s');
    $('#author').css('animation', 'fadeIn 1s');

  } catch (err) {
    $('#text').text('ERROR');
    $('#author').text('ERROR');
    console.error(err);
  }
};

function updateTweetLink() {
  const quote = $('#text').text();
  const authorName = $('#author').text();
  const tweet = `"${quote}" ${authorName}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
  $('#tweet-quote').attr('href', tweetUrl);
}

*/

