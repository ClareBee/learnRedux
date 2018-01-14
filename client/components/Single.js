import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render(){
    const postId = this.props.params.postId;
    //index of post
    const index = this.props.posts.findIndex((post) => post.code === postId);
    //gets us post
    const post = this.props.posts[index];
    const postComments = this.props.comments[postId] || [];

    return(
     <div className="single-photo">
       <Photo index={index} post={post} {...this.props}/>
       <Comments postComments={postComments}></Comments>
     </div>
    )
  }
});

export default Single;
