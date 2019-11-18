import React, { Component } from 'react';
import Header from "./Header"
export default class Image extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
        <div id="home" className="image">
          <image id="image" className="image"></image>
          <Header/>
        </div>

      </React.Fragment>
    );
  }
}