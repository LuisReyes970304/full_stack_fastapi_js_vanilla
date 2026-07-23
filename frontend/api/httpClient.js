import axios from "axios";

export const httpClient = (url) => axios.create({
    baseURL: url,
    timeout: 5000,
    headers: { "Content-Type": "application/json" },
});

export const apiRequest = async(httpClient) => {
    return {
        getAll: async() => {
            const response = await httpClient.get("/")
            return response.data;
        }
    }
}

