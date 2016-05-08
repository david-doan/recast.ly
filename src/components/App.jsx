class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };

    this.search = _.debounce(props.searchYouTube, 500);

    this.onSuccess = function(videos) {
      this.setState({
        currVideo: videos[0],
        videoList: videos,
        currDescription: ''
      });

      this.render();
    };
  }

  componentDidMount() {
    var options = {
      type: 'search',
      query: 'hello world',
      max: 50,
      key: window.YOUTUBE_API_KEY
    };

    this.props.searchYouTube(options, this.onSuccess.bind(this));
  }

  videoClick(video) {
    this.setState({
      currVideo: video
    });
    this.getDescription(video);
  }
  
  flagSearch(event) {
    var options = {
      type: 'search',
      query: event.target.value,
      max: 50,
      key: window.YOUTUBE_API_KEY
    };

    this.search( options, this.onSuccess.bind(this) );    
  }

  
  getDescription (video) {
    var videoID = video.id.videoId;
    var options = {
      type: 'videos',
      id: videoID,
      key: window.YOUTUBE_API_KEY
    };
    this.props.searchYouTube(options, this.returnDescription.bind(this));
  }

  returnDescription (data) {
    this.setState({
      currDescription: data[0].snippet.description
    }); 

    this.render();
  }


  render() {
    return (
      <div>
        <Nav flagSearch = {this.flagSearch.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video = {this.state.currVideo} />
          <VideoDetails currDescription = {this.state.currDescription} /> 
        </div>
        <div className="col-md-5">
          <VideoList videos = {this.state.videoList} videoClick = {this.videoClick.bind(this)} />
        </div>
      </div>  
    );  
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
