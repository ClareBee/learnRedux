import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render(){
    //index of post
    const index = this.props.posts.findIndex((post) => post.code === this.props.params.postId);
    //gets us post
    const post = this.props.posts[index];

    return(
     <div className="single-photo">
       <Photo index={index} post={post} {...this.props}/>
       <Comments></Comments>
     </div>
    )
  }
});

export default Single;
