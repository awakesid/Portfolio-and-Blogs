document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("darkModeToggle");

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    // document.imagemode.classList.toggle("imagedarkmode");

        if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }


  });

    if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }


});