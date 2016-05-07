var searchYouTube = (options, callback) => {
  // TODO
  var urlStr = 'https://www.googleapis.com/youtube/v3/'
                    + `${options.type}`
                    + '?part=snippet'
                    + `&key=${options.key}`;

  if (options.type === 'search') {
    urlStr += `&maxResults=${options.max}`
                    + '&type=video'
                    + '&videoEmbeddable=true'
                    + `&q=${options.query}`;
  } else if (options.type === 'videos') {
    urlStr += `&id=${options.id}`;
  }

  $.ajax({
    // This is the url you should use to communicate with the parse API server.
    url: urlStr,
    type: 'GET',
    contentType: 'application/json',
    success: function (data) {
      console.log('youTube: Data received');
      console.log(data);
      callback(data.items);
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('youTube: Failed to get data', data);
    }
  });
};

window.searchYouTube = searchYouTube;
