const reducer = (state, action) => {
    return {
        ...state,
        user: action.payload,
    }; 
  };
  
  export default reducer;