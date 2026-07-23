export const userCard = (user) =>
    `
        <div class="user">
            <h2>${user.name}</h2>
            <ul>
                <li>${user.email}</li>
            </ul>
            <div class="options">
                <button class="delete-card">Delete</button>
                <button class="update-card">Update</button>
            </div>
        </div>
        `;
