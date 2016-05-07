class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currVideo: window.exampleVideoData[0],
      videoList: window.exampleVideoData
    };
  }

  videoClick(video) {
    this.setState({
      currVideo: video
    });
    this.render();
  }

  flagProperty(){
    console.log('hello');
  }

  render() {
    return (
      <div>
        <Nav />
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
