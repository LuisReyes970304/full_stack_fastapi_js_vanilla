import { renderContainer } from "./view/container.js";
import { renderCard } from "./controller/userCard.controller.js";

document.addEventListener("DOMContentLoaded", async() => {
    renderContainer();
    await renderCard();
});
