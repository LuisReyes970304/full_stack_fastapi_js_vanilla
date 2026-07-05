import axios from "axios";

const users = document.querySelector(".users");

document.addEventListener("DOMContentLoaded", async()=> {
    const fastApi_data = await fastApiGet();
    for(const user of fastApi_data.users){
        users.innerHTML += `
        <div class="user">
            <h2>${user.name}</h2>
            <ul>
                <li>${user.email}</li>
            </ul>
        </div>`
    }
})

const fastApiGet = async() => {
    const response = await fastApi.get("/")
    console.log(response.data)
    return response.data
}

const fastApi = axios.create({
    baseURL: "http://127.0.0.1:8000",
    timeout: 5000,
    headers: {"Content-Type": "application/json"}
})

