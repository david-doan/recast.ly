var VideoDetails = (props) => (
  <div className="video-details">
    <div className="video-details-details">
      <p>{props.currDescription}</p>
    </div>
  </div>
);
  
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoDetails = VideoDetails;
