import React, { Component } from 'react';
import * as Config from '../actions/Config';

class DetailContent extends Component {
  render() {

    let content = this.props.content;

    return(
      <div className="detail-holder">
        <div className="detail-content">
          <div className="row">
            <h1>{content.title}</h1>
            <div className="column left">
              <p dangerouslySetInnerHTML={{__html:content.contentL}} />
            </div>
            <div className="column right">
              <p dangerouslySetInnerHTML={{__html:content.contentR}} />
            </div>
          </div>
          <div className="link-holder">
          {content.link.map(link => {
            return(
              <div className="link" key={link.label}>
                <a target="_blank" href={link.href} className="link link--kukuri" data-letters={link.label}>{link.label}</a>
              </div>
            );
          })}
          </div>
          <div className="images-holder">
          {content.images.map((image,i) => {

            let columnClass = !((i + 2) % 2) ? "left" : "right";

            return(
              <div className={'column ' + columnClass} key={i}>
                <img src={Config.getImageFromCache(image).src} />
              </div>
            );

          })}
          </div>
        </div>
      </div>
    );
  }
}

export default DetailContent;
