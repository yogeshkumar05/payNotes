const reducer = (state = {loginStatus: 0}, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
           return { ...state};
      case 'LOGIN_RESPONSE':
           return { ...state, loginStatus: action.data}
      default: 
           return state;
    }
   };
   export default reducer;