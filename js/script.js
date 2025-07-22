const ratingNumber = document.querySelectorAll(".btn-rating");
const submitBtn = document.querySelector(".btn-submit");
const nSelected = document.querySelector(".rating-selected");

ratingNumber.forEach((n) => {
  n.addEventListener("click", function () {
    const note = n.innerHTML;
    nSelected.innerHTML = note;
  });
});

function Submit() {
  const ratingState = document.querySelector(".rating-state");
  const tksState = document.querySelector(".tanks-state");
  if (nSelected.innerHTML === "") {
    alert("Please choose a grade.");
    return;
  } else {
    ratingState.style.display = "none";
    tksState.style.display = "block";
  }
}

submitBtn.addEventListener("click", Submit);
