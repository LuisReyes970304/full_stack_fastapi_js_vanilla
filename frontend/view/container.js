const containerHTML = `        
        <header>Consuming fastapi with axios</header>
            <main>
                <aside>
                    <button class="add-user">Add New User</button>
                    <button class="delete-user">Delete User by ID</button>
                    <button class="update-user">Update User Information</button>
                    <button class="Sign-out">Sign-out</button>
                </aside>
                <div class="users"></div>
            </main>
            `;

export function renderContainer() {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML("afterbegin", containerHTML);
}
