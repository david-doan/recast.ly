class VideoDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  getDescription (video) {
    var videoID = props.video.id.videoId;
    var options = {
      type: 'videos',
      id: videoID,
      key: window.YOUTUBE_API_KEY
    };
    props.searchYouTube(options, this.onSuccess);
  }

  onSuccess (data) {
    return data[0].snippet.description;
  }


  render () {
    return (
      <div>
        <p>{this.getDescription(this.props.video)}</p>
      </div>
    );
  }
} 
  
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoDetails = VideoDetails;
