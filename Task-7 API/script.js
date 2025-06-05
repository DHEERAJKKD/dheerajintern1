async function fetchUsers() {
    const loadingEl = document.getElementById('loading');
    const errorEl = document.getElementById('error');
    const userListEl = document.getElementById('user-list');

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');

      if (!response.ok) {
        // throw new Error(Error fetching users: ${response.status} ${response.statusText});
      }

      const users = await response.json();

      loadingEl.style.display = 'none';
      errorEl.style.display = 'none';

      users.forEach(user => {
        const card = document.createElement('div');
        card.className = 'user-card';

        card.innerHTML = `
          <div class="user-name">${user.name}</div>
          <div class="user-info"><strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a></div>
          <div class="user-info"><strong>Phone:</strong> <a href="tel:${user.phone}">${user.phone}</a></div>
          <div class="user-info"><strong>Company:</strong> ${user.company.name}</div>
          <div class="user-info"><strong>Website:</strong> <a href="http://${user.website}" target="_blank" rel="noopener noreferrer">${user.website}</a></div>
        `;
        userListEl.appendChild(card);
      });
    } catch (error) {
      loadingEl.style.display = 'none';
      errorEl.style.display = 'block';
      errorEl.textContent = error.message;
    }
  }

  window.addEventListener('DOMContentLoaded', () => {
    fetchUsers();
  });
