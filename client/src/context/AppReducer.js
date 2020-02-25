export default (state, action) => {
    switch(action.type) {
      case 'DELETE_QUERY':
        return {
          ...state,
          queries: state.queries.filter(query => query.id !== action.payload)
        }
      case 'ADD_QUERY':
        return {
          ...state,
          queries: [action.payload, ...state.queries]
        }
      default:
        return state;
    }
  }