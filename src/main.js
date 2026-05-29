import "./style.css";

const ratingBtns = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const ratingCard = document.getElementById("rating-card");
const thankyouCard = document.getElementById("thankyou-card");
const showNumber = document.querySelector(".show-number");
let selectedRating = null;

ratingBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    ratingBtns.forEach((button) => {
      button.classList.remove("bg-white", "text-black");
      button.classList.add("bg-icon-background", "text-text-color");
    });
    btn.classList.remove("bg-icon-background", "text-text-color");
    btn.classList.add("bg-white", "text-black");
    selectedRating = btn.textContent;
  });
});

submitBtn.addEventListener("click", () => {
  if (!selectedRating) {
    alert("Please select a rating first!");
    return;
  }

  ratingCard.classList.remove("flex");
  ratingCard.classList.add("hidden");

  thankyouCard.classList.remove("hidden");
  thankyouCard.classList.add("flex");

  showNumber.textContent = selectedRating;
  setTimeout(() => {
    ratingCard.classList.remove("hidden");
    ratingCard.classList.add("flex");

    thankyouCard.classList.remove("flex");
    thankyouCard.classList.add("hidden");

    showNumber.textContent = "";
    selectedRating = null;

    ratingBtns.forEach((btn) => {
      btn.classList.remove("bg-white", "text-black");
      btn.classList.add("bg-icon-background", "text-text-color");
    });
  }, 3000);
});
