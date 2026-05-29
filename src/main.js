import "./style.css";

const ratingBtns = document.querySelectorAll(".rating-btn");
ratingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    ratingBtns.forEach((button) => {
      button.classList.remove("bg-white", "text-black");
      button.classList.add("bg-icon-background", "text-text-color");
    });
    btn.classList.remove("bg-icon-background", "text-text-color");
    btn.classList.add("bg-white", "text-black");
  });
});
