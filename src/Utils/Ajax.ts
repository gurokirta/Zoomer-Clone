import axios from "axios";

export const Ajax = axios.create({
  baseURL: "http://localhost:8080", // 'http://localhost:8080'
  headers: { "Content-Type": "application/json" },
});
