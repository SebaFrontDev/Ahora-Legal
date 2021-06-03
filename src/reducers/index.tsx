const reducer = (state: any, action: { type: any; payload: any; }) => {
    return {
        ...state,
        user: action.payload,
    }; 
  };
  
  export default reducer;