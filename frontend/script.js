import { fastApi } from "./services/endpoint.js";

const users = document.querySelector(".users");

document.addEventListener("DOMContentLoaded", async () => {
    const data = await fastApi.getAll();
    for (const user of data.users) {
        users.innerHTML += `
        <div class="user">
            <h2>${user.name}</h2>
            <ul>
                <li>${user.email}</li>
            </ul>
        </div>`;
    }
});

//test...

