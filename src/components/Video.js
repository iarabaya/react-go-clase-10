import React from 'react';

class Video extends React.Component {
  render() {
    return (
      <source src={this.props.src} type="video/mp4"/>
    )
  }
}

export default Video;
