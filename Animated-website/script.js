// Optional: Additional JavaScript for interactive animations
const button = document.querySelector(".animated-button");

button.addEventListener("mouseenter", () => {
  button.style.transition = "all 0.2s ease-in-out";
});

button.addEventListener("mouseleave", () => {
  button.style.transition = "all 0.3s ease-in-out";
});
