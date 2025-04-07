document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme");
  
    if (currentTheme === "light") {
      document.body.classList.add("light");
      document.documentElement.classList.add("light");
    }
  
    toggleBtn?.addEventListener("click", () => {
      document.body.classList.toggle("light");
      document.documentElement.classList.toggle("light");
      const theme = document.body.classList.contains("light") ? "light" : "dark";
      localStorage.setItem("theme", theme);
    });
  });
  