import { httpClient, apiRequest } from "../api/httpClient";

const api = httpClient("http://127.0.0.1:8000");

export const fastApi = await apiRequest(api);
