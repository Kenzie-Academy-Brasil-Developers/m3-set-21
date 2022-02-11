import axios from "axios";

export const api = axios.create({
  baseURL: "https://kenzie-habits.herokuapp.com",
});

export const githubApi = axios.create({
  baseURL: "https://api.github.com",
});
