export default function createReducer(initialState, handlerMap) {
  return (state = initialState, action) => {
    const handler = handlerMap[action.type];
    if (handler) {
      return handler(state, action);
    }
    return state;
  };
}