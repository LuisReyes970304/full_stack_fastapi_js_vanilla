import { fastApi } from "../services/fastApi";
import { aside } from "../components/container/aside";
import { confirmation } from "../components/modals/new_user";

export async function createUserPopup() {
    const addUser = document.querySelector(".add-user");
    addUser.addEventListener("click", async() => {
        await confirmation();
        const data = await fastApi.getAll();
    })
}
