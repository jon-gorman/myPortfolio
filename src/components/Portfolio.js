import React, {Component} from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink
} from 'reactstrap';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (

                    <div
                      className="columns portfolio-item">
                      <div
                        // className="item-wrap"
                      >

                        <Card style={{border: "1px solid lightgrey",borderRadius: "10px",textAlign: "center"}}>
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            <CardImg style={{borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} src={`${item.imgurl}`} className="item-img" alt="Card image cap"/>
                          </a>
                          <CardBody>
                            <CardTitle>{item.title}</CardTitle>
                            <CardSubtitle>{item.name}</CardSubtitle>
                            <CardText>{item.description}</CardText>
                            <CardLink>
                              <a style={{color: "black"}} className="btn btn-default" href={item.link} type="submit" target="_blank" rel="noopener noreferrer">Visit here!
                              </a>
                            </CardLink>
                          </CardBody>
                        </Card>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}


// }