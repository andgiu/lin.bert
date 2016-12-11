import React, { Component } from 'react';
import { Link } from 'react-router';
import * as Config from '../actions/Config';
import _ from 'lodash';

class Home extends Component {

  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.projects = Config.getProjectList();
  }

  componentDidMount(){
    this.animateDetail();
  }

  componentDidUpdate(props){
    this.animateDetail();
  }

  animateDetail() {

    let route = this.props.params.id;
    console.log(route);

    _.each(this.refs.home.children,_.bind(function(project){

      /*
      let inner = project.firstElementChild;
      let height = project.getAttribute('id') != route ? 40 : inner.offsetHeight;
      height = route == undefined ? inner.offsetHeight : height;

      TweenLite.killTweensOf(project);
      TweenLite.to(project,1,{height:height, ease:Expo.easeInOut});
      */

      if(route != undefined && route == project.getAttribute('id')) {



      } else {

      };


    },this));

  }

  render() {

    return(
      <div id="home" ref="home">
        {this.projects.map(project => {

          let active = project.route == this.props.params.id;

          return(
            <div id={project.route} key={project.route} className="project-holder" disabled={project.route == this.props.params.id}>
              <div className="project-item" disabled={this.props.params.id != undefined && project.route != this.props.params.id}>
                <Link to={project.route} activeClassName="active">
                  <div className="header-holder" disabled={active}>
                    <div className="bg">
                      <img src={Config.getImageFromCache(project.image).src} />
                    </div>
                    <div className="border" />
                    <h1><span>{project.name}</span></h1>
                    <h2><span>{project.type}</span></h2>
                  </div>
                </Link>
              </div>
            </div>
          );

        })}
      </div>
    );
  }
}

export default Home;
