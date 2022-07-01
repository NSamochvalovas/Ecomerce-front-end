import axios from 'axios';

const BASE_URL = "http://localhost:8080/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmM1N2E3YmU5OGM3MTA5ZjYzODJjZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjY3NTYzMX0.NXcLuL2OSein-qDYAzmgq3z-qDHmcS05d2UFYgv4AjI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});