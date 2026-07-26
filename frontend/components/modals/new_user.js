import Swal from "sweetalert2";

export const confirmation = () => {
    return Swal.fire({
        title: "Create New User",
        heightAuto: false, 
        scrollbarPadding: false,
        html: `
            <div class="swal-quantix-form">
                <input id="name" class="quantix-input" placeholder="User name">
                <input id="email" class="quantix-input" placeholder="Email address" type="email">
                <input id="password" class="quantix-input" placeholder="Password" type="password">
            </div>
        `,
        showConfirmButton: true,
        showCancelButton: true,
        confirmButtonText: "Create User",
        cancelButtonText: "Cancel",
        buttonsStyling: false,
        customClass: {
            container: "quantix-swal-container",
            popup: "quantix-swal-popup",
            title: "quantix-swal-title",
            actions: "quantix-swal-actions",
            confirmButton: "quantix-swal-confirm",
            cancelButton: "quantix-swal-cancel",
        },
        preConfirm: () => {
            const name = document.getElementById("name")?.value;
            const email = document.getElementById("email")?.value;
            const password = document.getElementById("password")?.value;

            if (!name || !email || !password) {
                Swal.showValidationMessage("Please fill out all fields");
                return false;
            }
            return { name, email, password };
        },
    });
};
