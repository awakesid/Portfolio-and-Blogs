document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero");
  const toggleBtn = document.getElementById("darkModeToggle");



const btn = document.getElementById("mailBtn");
  btn.addEventListener("click", () => {
    const email = "youcrashall@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      const tooltip = btn.querySelector(".tooltip-text");
      // tooltip.classList.remove("tooltip-text"); // reset animation
      tooltip.classList.add("show");
      setTimeout(() => tooltip.classList.remove("show"),1500);
    }).catch(err => console.error("Failed to copy email: ", err));
  });

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


  if (!hero) return; // safety check

  const heroImages = ["/me.jpg", "/mm.gif"];
  let currentIndex = 0;

  hero.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % heroImages.length;
    hero.src = heroImages[currentIndex];

    // restart animation
    hero.style.animation = "none";
    hero.offsetHeight; // trigger reflow
    hero.style.animation = "slideInRight 0.3s ease-out forwards";
  });
});