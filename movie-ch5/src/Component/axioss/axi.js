import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "fcd7932d38f260e5623b6e595ffff805",
  },
});

export default instance;