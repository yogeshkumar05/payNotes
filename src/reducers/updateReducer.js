const reducer = (state = {
    notes:{},
    selectedNoteDetail: '',
    selectedNoteTitle: 'New Note'
}, action) => {
    switch (action.type) {
      case 'UPDATE_DATA':
           return { ...state, notes: action.data}
      case 'UPDATE_NOTE_LOCAL_DETAIL':
        return { ...state, selectedNoteDetail: action.data}
      case 'UPDATE_NOTE_LOCAL_TITLE':
        return { ...state, selectedNoteTitle: action.data}
      default: 
           return state;
    }
   };
   export default reducer;

   export const updateData = (data) => ({
    type: 'UPDATE_DATA',
    payload: data
});