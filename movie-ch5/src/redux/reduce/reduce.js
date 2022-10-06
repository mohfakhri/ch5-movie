const initial = {
  favouritsMovie: [],
};

export default function favReducer(state = initial, action) {
  switch (action.type) {
    case "add_favourit":
      return {
        ...state,
        favouritsMovie: action.payload,
      };

    default:
      return state;
  }
}
