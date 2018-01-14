// a reducer takes in two things:
//the action - info about happened
// a copy about the current state


//ES6 default parameters
function posts(state = [], action){
  //type = increment_likes
  switch(action.type){
    case 'INCREMENT_LIKES':
    const index = action.index;
    //return updated state as a new array using ES6 spread to create a copy of the altered item
    return [
      ...state.slice(0, index), //before the one we're updating
      { ...state[index], likes: state[index].likes + 1 },
      ...state.slice(index + 1) //everything after it
    ]
    default:
    return state;
  }
  return state;
}

export default posts;
