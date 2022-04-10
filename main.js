const checkboxs = document.querySelectorAll(".checkbox");
console.log(checkboxs);
function handleCheckbox(e) {
  console.log(e.target);
  console.log(e.target.classList);
  const classList = e.target.classList;
  if (classList.length === 2) {
    classList.remove("check");
  } else {
    classList.add("check");
  }
}
checkboxs.forEach((checkbox) => {
  checkbox.addEventListener("click", handleCheckbox);
});

const toggleBtn = document.querySelector(".mobile");
const nav = document.querySelector(".nav");
function handleToggle() {
  if (toggleBtn.classList.contains("close")) {
    toggleBtn.classList.remove("close");
    toggleBtn.innerHTML = '<i class="fas fa-bars"></i>';
    nav.style.left = "-200px";
  } else {
    toggleBtn.classList.add("close");
    toggleBtn.innerHTML = '<i class="fas fa-times"></i>';
    nav.style.left = "0";
  }
}
toggleBtn.addEventListener("click", handleToggle);
