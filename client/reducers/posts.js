// a reducer takes in two things:
//the action - info about happened
// a copy about the current state


//ES6 default parameters
function posts(state = [], action){
  //type = increment_likes
  switch(action.type){
    case 'INCREMENT_LIKES':
    const i = action.i;
    //return updated state as a new array using ES6 spread to create a copy of the altered item
    return [
      ...state.slice(0, i), //before the one we're updating
      { ...state[i], likes: state[i].likes + 1 },
      ...state.slice(i + 1) //everything after it
    ]
    default:
    return state;
  }
  return state;
}

export default posts;
