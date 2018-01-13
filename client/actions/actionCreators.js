//action creators

//increment

export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    //es6 no need to give name if the same
    index
  }
}

//add comment

export function addComment(postId, author, comment){
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

//remove comment

export function removeComment(postId, index){
  return{
    type: 'REMOVE_COMMENT',
    postId,
    index
  }
}
