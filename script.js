const menuToggle = document.getElementById("menu-toggle");
  const sidebar = document.getElementById("mobile-sidebar");

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("show");
  });

  function closeSidebar() {
    sidebar.classList.remove("show");
  }

