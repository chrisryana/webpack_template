
const InitialState = {

};

interface Action {
  type: string
  payload?: any,
}

function reducer(state = InitialState, action: Action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default reducer;
