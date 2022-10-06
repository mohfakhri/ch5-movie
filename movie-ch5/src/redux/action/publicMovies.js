export default function getAllMovies(data) {
    return {
      type: "get_movies",
      payload: data,
    };
  }