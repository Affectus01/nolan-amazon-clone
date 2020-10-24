import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-nolan-amzn-clone-e5e1a.cloudfunctions.net/api",
  // "http://localhost:5001/nolan-amzn-clone-e5e1a/us-central1/api"
});

export default instance;
