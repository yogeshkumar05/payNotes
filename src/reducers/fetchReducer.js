const reducer = (state = {notes:{}}, action) => {
    switch (action.type) {
      case 'FETCH_DATA':
           return { ...state};
      case 'DATA_RECEIVED':
           return { ...state, notes: action.data}
      default: 
           return state;
    }
   };
   export default reducer;