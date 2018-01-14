import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render(){
    return(
     <div className="photogrid">
       {this.props.posts.map((post, index) => <Photo {...this.props} key={index} index={index} />)}
     </div>
    )
  }

});

export default PhotoGrid;
