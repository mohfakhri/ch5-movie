const initial = {
    allMovies: [],
  };
  
  export default function allMoviesReducer(state = initial, action) {
    switch (action.type) {
      case "get_movies":
        return {
          ...state,
          allMovies: action.payload,
        };
  
      default:
        return state;
    }
  }
  