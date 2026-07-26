import { fastApi } from "../services/fastApi";
import { userCard } from "../components/container/card";

//This is the first endpoint getAll
export async function renderCard() {
    const users = document.querySelector(".users");
    const data = await fastApi.getAll();
    for (const user of data.users) {
        users.insertAdjacentHTML("afterbegin", userCard(user));
    }
}