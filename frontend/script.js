import axios from "axios";

const users = document.querySelector(".users");

document.addEventListener("DOMContentLoaded", async () => {
    const fastApi_data = await apiRequest(httpFastApi);
    for (const user of fastApi_data.users) {
        users.innerHTML += `
        <div class="user">
            <h2>${user.name}</h2>
            <ul>
                <li>${user.email}</li>
            </ul>
        </div>`;
    }
});


async function apiRequest(httpClient, method = "get", url = "", data = null) {
    try {
        const normalizedMethod = method.toLowerCase();
        const response =
            normalizedMethod === "get" || normalizedMethod === "delete"
                ? await httpClient[normalizedMethod](`/${url}`)
                : await httpClient[normalizedMethod](`/${url}`, data);

        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(
            `Error en la petición ${method.toUpperCase()} a /${url}:`,
            error,
        );
        throw error;
    }
}

const httpFastApi = axios.create({
    baseURL: "http://127.0.0.1:8000",
    timeout: 5000,
    headers: { "Content-Type": "application/json" },
});
