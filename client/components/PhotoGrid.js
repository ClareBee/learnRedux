import React from 'react';
import { Link } from 'react-router';
import Photo from './Photo';

const PhotoGrid = React.createClass({
  render(){
    return(
     <div className="photogrid">
       {this.props.posts.map((post, index) => <Photo />)}
     </div>
    )
  }

});

export default PhotoGrid;
