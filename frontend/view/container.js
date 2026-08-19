import { aside } from "../components/container/aside";
import { header } from "../components/container/header";
import { renderCard } from "../controller/userCard.controller";
import { createUserPopup } from "../controller/newUser.controller";

export async function renderContainer() {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML("afterbegin", containerHTML(header, aside));
    let card = await renderCard();
    let createUser = await createUserPopup();
}

const containerHTML = (header, aside) =>`      
    ${header}
    <main>
        ${aside}
        <div class="users"></div>
    </main>
    `;


