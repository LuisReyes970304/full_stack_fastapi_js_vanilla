import { fastApi } from "../services/fastApi";
import { aside } from "../components/container/aside";
import { confirmation } from "../components/modals/new_user";
import Swal from "sweetalert2";

export async function createUserPopup() {
    const addUserButton = document.querySelector(".add-user");
    if (!addUserButton) return;

    addUserButton.addEventListener("click", async () => {
        const result = await confirmation();

        if (!result.isConfirmed) return;

        const { name, email, password } = result.value;

        try {
            const newUser = await fastApi.postUser(name, email, password);
            Swal.fire({
                title: "User Created!",
                text: `${newUser.name} has been added successfully.`,
                icon: "success",
                timer: 2000,
                showConfirmButton: false,
                customClass: {
                    popup: "quantix-swal-popup",
                },
            });
            return "Done!"
        } catch (error) {
            console.error("Failed to create user:", error);
            Swal.fire({
                title: "Creation Failed",
                text:
                    error.response?.data?.message ||
                    "An unexpected error occurred.",
                icon: "error",
                customClass: {
                    popup: "quantix-swal-popup",
                },
            });
        }
    });
}
