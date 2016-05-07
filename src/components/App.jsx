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
        videoList: videos
      });

      this.render();
    };
  }

  componentDidMount() {
    var options = {
      query: 'hello world',
      max: 5,
      key: window.YOUTUBE_API_KEY
    };

    this.props.searchYouTube(options, this.onSuccess.bind(this));
  }

  videoClick(video) {
    this.setState({
      currVideo: video
    });
    this.render();
  }
  
  flagSearch(event) {
    var options = {
      query: event.target.value,
      max: 5,
      key: window.YOUTUBE_API_KEY
    };

    this.search( options, this.onSuccess.bind(this) );    
  }

  render() {
    return (
      <div>
        <Nav flagSearch = {this.flagSearch.bind(this)}/>
        <div className="col-md-7">
          <VideoPlayer video = {this.state.currVideo} />
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
