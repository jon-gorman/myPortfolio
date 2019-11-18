import React, { Component } from 'react';
// import resumeData from "../resumeData";
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me
              </p>
              <h1 >
                <a href="mailto:contact@jongorman.top?subject=from%20Profile%20">email me here</a>
              </h1>

            </div>

          </div>
        <div className="row section-head">
        <div className="ten columns">
          <p className="lead">
            Downloadable CV here.
          </p>
          <h1 className="pdf">
          <a  href={resumeData.pdf}>Jon Gorman CV</a>
          </h1>
        </div>
          <div className="row">
            <aside className="eigth columns footer-widgets">
              <div className="widget">
              </div>
            </aside>
          </div>
        </div>
        </section>
        );
  }
}