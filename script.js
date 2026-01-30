// Simple scroll animation effect
window.addEventListener("scroll", () => {
  document.querySelectorAll(".card").forEach(card => {
    const position = card.getBoundingClientRect().top;
    if(position < window.innerHeight - 50){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
