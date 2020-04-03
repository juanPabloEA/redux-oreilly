let initialState = {
    loading: false,
    data: void 0,
    error: void 0
  };
  
  const bookReducer = (state = initialState, action) => {
    switch(action.type) {
      case 'FETCH_BOOK_LOADING':
        return {...state, loading: true };
      case 'FETCH_BOOK_SUCCESS':
        return {...state, data: Object.assign({}, action.payload), loading: false};
      case 'FETCH_BOOK_ERROR': 
        return {...state, error: { ...action.payload }, loading: false }; 
    }
  }
  
  module.exports = bookReducer;