const reducer = (state = {name: 'initial name'}, action) => {
    switch (action.type) {
      case 'FETCH_DATA':
           return { ...state};
      case 'DATA_RECEIVED':
           return { ...state, name: action.data.name}
      default: 
           return state;
    }
   };
   export default reducer;