const myReducer = (state, action) => {
  switch (action.type) {
    case "STORE_DATA":
      return { ...state, data: action.data };
    case "RESET_STORE_DATA":
      return { ...state, data: action.data };
    default:
      return state;
  }
};

export default myReducer;
