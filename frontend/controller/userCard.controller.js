import { fastApi } from "../services/endpoint";
import { userCard } from "../components/container/card";

export async function renderCard() {
    const users = document.querySelector(".users");
    const data = await fastApi.getAll();
    for (const user of data.users) {
        users.insertAdjacentHTML("afterbegin", userCard(user));
    }
}