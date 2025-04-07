const users = {
  "user@example.com": { role: "user", password: "user123" },
  "volunteer@example.com": { role: "volunteer", password: "vol123" },
  "gov@example.com": { role: "gov", password: "gov123" }
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = document.getElementById("email").value.trim().toLowerCase();
      const password = document.getElementById("password").value.trim();
      const user = users[email];
      const error = document.getElementById("login-error");

      if (!user || user.password !== password) {
        error.innerHTML = "<p>Невірний email або пароль.</p>";
        return;
      }

      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("role", user.role);
      window.location.href = `${user.role}.html`;
    });
  }
});
