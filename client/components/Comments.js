import React from 'react';

const Comments = React.createClass({
  renderComment(comment, index){
    return(
      <div className="comment" key={index}>
        <p>
          <strong>{comment.user}</strong>
          {comment.text}
          <button className="remove-comment">&times;</button>
        </p>

      </div>
    )
  },
  handleSubmit(e){
    //stops the page from refreshing
    e.preventDefault();
    //using DOM element with ref - unusual for React
    console.log(this.refs);
    //es6 destructuring
    const { postId} = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    //reference to actionCreator and dispatched to comments reducer
    this.props.addComment(postId, author, comment);
  },
  render(){

  return(
    <div className="comments">
      {this.props.postComments.map(this.renderComment)}
      <form action="" ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
        <input type="text" ref="author" placeholder="author"/>
        <input type="text" ref="comment" placeholder="comment"/>
        <input type="submit" hidden/>
      </form>
      </div>
  )
  }

});

export default Comments;
