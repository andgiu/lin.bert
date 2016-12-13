import React, { Component } from 'react';
import { Link } from 'react-router';
import * as Config from '../actions/Config';


class DetailContent extends Component {
  render() {

    let content = this.props.content;
    let prev = this.props.prev;
    let next = this.props.next;

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
                <span className="icon-link"></span>
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
          <div className="pagination">
            <div className="column left">
              <div className="caption">previous project</div>
              <Link className="link" to={'project/' + prev.route} data-letters={prev.name}><span className="icon-left-open"></span>{prev.name}</Link>
            </div>
            <div className="column right">
              <div className="caption">next project</div>
              <Link className="link" to={'project/' + next.route} data-letters={next.name}>{next.name}<span className="icon-right-open"></span></Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DetailContent;
