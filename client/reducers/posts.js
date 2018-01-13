// a reducer takes in two things:
//the action - info about happened
// a copy about the current state


//ES6 default parameters
function posts(state = [], action){
  console.log("the post will change");
  console.log(state, action);
  return state;
}

export default posts;
