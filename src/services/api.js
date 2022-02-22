import axios from "axios";

export const kenzieFoodApi = axios.create({
  baseURL: "https://kenzie-food-api.herokuapp.com",
});

export const kenziehubApi = axios.create({
  baseURL: "https://kenziehub.herokuapp.com",
});
