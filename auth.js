document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("nav-links");
    const loggedIn = localStorage.getItem("loggedIn") === "true";
    const role = localStorage.getItem("role");
  
    if (!nav) return;
  
    nav.innerHTML = `<li><a href="index.html">Головна</a></li>`;
  
    if (loggedIn && role) {
      nav.innerHTML += `<li><a href="${role}.html">Мій профіль</a></li>`;
      nav.innerHTML += `<li><a href="index.html" onclick="logout()">Вийти</a></li>`;
    } else {
      nav.innerHTML += `<li><a href="login.html">Вхід</a></li>`;
    }
  });
  
  function logout() {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("role");
  }
  
  